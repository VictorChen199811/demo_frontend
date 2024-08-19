<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: #3a3f51">
      <!-- 側邊欄 -->
      <div class="sidebar">
        <el-menu>
          <el-menu-item index="1">
            <el-icon>
              <home-filled/>
            </el-icon>
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <message/>
            </el-icon>
            <span>Messages</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <setting/>
            </el-icon>
            <span>Settings</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header style="background-color: #f8f9fa; padding: 10px">
        <!-- 頂部欄 -->
        <el-input placeholder="Search..." prefix-icon="el-icon-search"/>
      </el-header>
      <el-main style="background-color: #f0f4f8; padding: 20px">
        <!-- 主內容區 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <!-- 卡片 1 -->
            <el-card class="top-card">
              <template v-slot:header>加權指數</template>
              <h1 class="large-font" :style="{color: comparisonColor}">{{
                  todayTaiwanTotalIndex?.closingIndex || '無數據'
                }}</h1>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!-- 卡片 2 -->
            <el-card class="top-card">
              <template v-slot:header>
                趨勢
              </template>
              <div>
                <line-chart :chart-data="chartData" :options="chartOptions" />
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <!-- 卡片 3 -->
            <el-card class="top-card">
              <template v-slot:header> Lorem Ipsum</template>
              <div>卡片內容</div>
            </el-card>
          </el-col>
        </el-row>
        <el-card style="margin-top: 10px;">
          <template v-slot:header> 今日股價</template>
          <div>
            <el-table :data="stockData" height="500" style="width: 100%">
              <el-table-column prop="code" label="證券代號"/>
              <el-table-column prop="name" label="證券名稱"/>
              <el-table-column prop="highestPrice" label="開盤價"/>
              <el-table-column prop="lowestPrice" label="收盤價"/>
              <el-table-column
                  prop="change"
                  label="漲跌幅"
              >
                <template v-slot="scope">
                  <span
                      v-bind:style="{ color: scope.row.change > 0 ? 'red' : scope.row.change < 0 ? 'green' : 'black' }">
                  {{ Math.abs(scope.row.change).toFixed(2) }}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import {ref, onMounted, computed} from "vue";
import {HomeFilled, Message, Setting} from "@element-plus/icons-vue";
import StockControllerApi from "../../generated-sdk/src/api/StockControllerApi";
import {StockData, TaiwanTotalIndex} from "stock_demo/src";

const stockData = ref<StockData | null>(null);
const todayTaiwanTotalIndex = ref<TaiwanTotalIndex | null>(null);
const previousTaiwanTotalIndex = ref<TaiwanTotalIndex | null>(null);
const taiwanTotalIndex = ref<TaiwanTotalIndex[] | null>(null);
const stockApi = new StockControllerApi();
const chartData = ref({
  labels: []  as Date[], // 這裡將動態填充日期
  datasets: [
    {
      label: '加權指數變化',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: [] as number[], // 這裡將動態填充加權指數
      fill: false,
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})
async function fetchTaiwanTotalIndex() {
  stockApi.getTaiwanTotalIndex("", (error: any, data: TaiwanTotalIndex[]) => {
    if (error) {
      console.error("Failed to fetch stock data:", error);
    } else {
      taiwanTotalIndex.value = data;

      // 假设 taiwanTotalIndex.value 是数组，寻找最新日期的对象
      if (Array.isArray(taiwanTotalIndex.value) && taiwanTotalIndex.value.length > 0) {
        // 按日期排序，最新的放在第一位
        taiwanTotalIndex.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        todayTaiwanTotalIndex.value = taiwanTotalIndex.value[0];
        previousTaiwanTotalIndex.value = taiwanTotalIndex.value[1]; // 前一天的数据
      }
      // 更新 chartData
      chartData.value.labels = taiwanTotalIndex.value.map(index => index.date);
      chartData.value.datasets[0].data = taiwanTotalIndex.value.map(index => parseFloat(index.closingIndex));
    }
  });
}

// 计算今天的加权指数相对于前一天的变化情况
const comparisonColor = computed(() => {
  if (!todayTaiwanTotalIndex.value || !previousTaiwanTotalIndex.value) {
    return 'black'; // 如果数据缺失，默认显示黑色
  }

  const todayClosing = parseFloat(todayTaiwanTotalIndex.value.closingIndex);
  const previousClosing = parseFloat(previousTaiwanTotalIndex.value.closingIndex);

  if (isNaN(todayClosing) || isNaN(previousClosing)) {
    return 'black'; // 如果数据不合法，默认显示黑色
  }

  return todayClosing > previousClosing ? 'red' : (todayClosing < previousClosing ? 'green' : 'black');
});

async function fetchStockData() {
  try {
    stockApi.getTodayStockData((error: any, data: StockData) => {
      if (error) {
        console.error("Failed to fetch stock data:", error);
      } else {
        stockData.value = data; // 假设 `data` 是你需要的股票数据
      }
    });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}

onMounted(() => {
  fetchStockData(); // 組件加載後調用 API
  fetchTaiwanTotalIndex();
});
</script>

<style scoped>
.sidebar {
  padding: 10px;
  color: #ffffff;
}

.sidebar .el-menu {
  background-color: transparent;
}

.top-card {
  height: 200px;
}

.large-font {
  font-size: 2.0rem; /* 根据需要调整字体大小 */
  font-weight: bold; /* 可选，增加字体粗细 */
}
</style>

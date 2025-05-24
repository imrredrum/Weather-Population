# 氣象查詢與人口出生圖表

## 專案需求

1. 通用
   1. [x] 完全支援 RWD
   2. [x] 完全支援容器化與靜態部署
2. 氣象查詢
   1. [x] 可自行填入 API key
   2. [x] 填入 API key 立即進行驗證
   3. [x] 根據 City 與 Country 進行搜尋
   4. [x] 氣象圖卡根據 `載入中`、`無資料`、`正常回傳` 顯示對應畫面
3. 人口出生圖表
   1. [x] 根據傳入資料動態生成圖表
   2. [x] 圖表包含 `Male` 與 `Female` 兩組數據
   3. [x] yAxis 以 10k 為間隔單位，額外增加一個最小區段
   4. [x] 額外添加 xAxis Highlight 與對應的 Tooltip 顯示

## 技術選用

- React (Next.js App Router)：現代化頁面管理。
- TypeScript：型別安全。
- Zod：資料格式驗證。
- MUI：快速 UI 建構。
- Zustand：全域狀態管理（Token 儲存與操作）。
- SWR、Axios：HTTP 資源獲取。

## 環境設置

### 前置需求

- Node.js (建議版本 14 以上)
- Docker (建議版本 20 以上)
- Docker Compose (建議版本 1.27 以上)

### 安裝步驟

1. 將專案複製到本地端：

   ```sh
   git clone <專案網址>
   cd <專案目錄>
   ```

#### 進行部署

##### 使用 Docker 部署

1. 建立並啟動 Docker 容器：

   ```sh
   docker-compose up --build
   ```

##### 使用 npm 指令 (不使用容器)

1. 安裝相依套件：

   ```sh
   npm install --legacy-peer-deps
   ```

2. 打包編譯伺服器程式碼：

   ```sh
   npm run build
   ```

3. 透過 nginx 等工具 serve ./out/ 即可

#### 建立開發環境

##### 使用 Docker 開發

1. 建立並啟動 Docker 容器：

   ```sh
   docker-compose up --build
   ```

2. 進入 Docker 容器：

   ```sh
   docker-compose exec app sh
   ```

3. 在容器內執行應用服務：

   ```sh
   npm run dev
   ```

##### 本地開發環境

1. 安裝相依套件：

   ```sh
   npm install
   ```

2. 啟動開發伺服器：

   ```sh
   npm run dev
   ```

3. 開啟瀏覽器並訪問 <http://localhost:3000> 查看應用服務。

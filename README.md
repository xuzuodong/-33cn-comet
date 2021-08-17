# @33cn/comet 即时通讯协议

目前仅支持 Webpack 环境。

## 用法： 

首先安装依赖

```

npm i enc-utils protobufjs

```

然后把包放入项目，并开始使用。

这里以 Vue 3  + TypeScript 项目举例，将包放至 `/src/utils/comet/` ：

```vue
<template>
  <div>
    hello, world
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from "vue"
import { Comet } from "@/utils/comet"
import type Connection from "@/utils/comet/connection"

let connection: Connection | undefined

const comet = new Comet('ws://172.16.101.107:8888/sub')
comet
    .authorize({
        appId: 'dtalk',
        token: 'MOCK',
    })
    .then((conn) => {
        console.log('Comet: connected successfully! ');
        connection = conn // 赋值给全局变量，方便后续其他操作
    })
    .catch((reason) => {
        console.error(reason)
    })

onUnmounted(() => { 
  connection?.disconnect()
})
</script>

```
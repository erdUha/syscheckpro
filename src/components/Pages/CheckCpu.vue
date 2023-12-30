<template>
	<div>
		<h3>Здесь вы можете проверить ваш процессор</h3>
		<button id="check-button" @click="benchmarkCpu">Проверить</button>
		<h4 id="message-res"></h4>
	</div>
</template>

<style scoped>
#check-button:disabled {
	background-color: #ccc;
}
#check-button {
	padding: 1rem 2rem;
}
</style>

<script>
import { ref } from 'vue'

const time = ref(0)

export default {
	name: 'CheckCpu',
	methods: {
		benchmarkCpu() {
			let tmp, a = 0, b = 1;
			console.log('Started!');
			const checkButton = document.getElementById('check-button')
			const messageRes = document.getElementById('message-res')
			checkButton.disabled = true;
			messageRes.innerHTML = 'В процессе...'
			let totalTime = 0;
			for (let wo = 0; wo < 4; ++wo) {
				const t1 = Date.now();
				b = 1
				a = 0
				for (let io = 0; io < 1000; ++io) {
						for (let jo = 0; jo < 100; ++jo) {
								console.log(jo)
								tmp = b;
								b = a + b;
								a = tmp;
						}
				}
				const t2 = Date.now();
				totalTime += t2 - t1;
			}
			console.log('Finished!');
			messageRes.innerHTML = 'Готово! Время: ' + 0.001 * totalTime + "c"
			console.log(`Time: ${0.001 * totalTime}s`);
			time.value = totalTime * 0.001
			console.log(time.value);
			checkButton.disabled = false;
		}
	},
}
</script>

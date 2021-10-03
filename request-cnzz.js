// 请求脚本
const MAP = {
  pic1: '&show=pic',
  pic2: '&show=pic1',
  pic3: '&show=pic2',
  line: '',
  line1: '&online=1',
  line2: '&online=2',
  line3: '&online=1&show=line',
}
let mode = MAP[TYPE] ? MAP[TYPE] : ''

function cnzz() {
  const script = document.createElement('script')
  script.src = `https://s9.cnzz.com/z_stat.php?id=${GA_ID}${mode}`
  script.id = GA_ID
  script.language = 'JavaScript'
  document.body.appendChild(script)
}

export default cnzz

class dogAnimation{
  dogsImg: string[]
  img_path: string
  img_count: number

  constructor(canvas) {
    // 生成canvas
    canvas.width = window.innerWidth
    canvas.height = 200
    this.dogsImg = []
    this.img_path = './config/img'
    this.img_count = 8

  }
  
}
// const canvas = document.getElementById('gl-dog') as HTMLCanvasElement

import './watermark.css';

export class waterMark {
  render(text) {
    this.destory();
    const waterMarkDom = document.createElement('div');
    waterMarkDom.className = 'watermark';
    waterMarkDom.setAttribute('id', 'waterMark');

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.rotate((20 * Math.PI) / 180);
    ctx.font = '30px Arial';
    ctx.fillText(text ? text : 'Hello World', 10, 30);
    let tempSrc = canvas.toDataURL('image/png');
    let img = document.createElement('img');
    img.src = tempSrc;

    waterMarkDom.style.backgroundImage = `URL(${tempSrc})`; //设置背景图的的地址
    waterMarkDom.style.backgroundRepeat = 'repeat'; //设置背景不平铺
    // waterMarkDom.style.backgroundPosition = 'center'; //设置背景图的位置
    waterMarkDom.style.pointerEvents = 'none';
    // waterMarkDom.appendChild(img);
    waterMarkDom.style.position = 'fixed';
    waterMarkDom.style.top = '0';
    waterMarkDom.style.left = '0';
    waterMarkDom.style.right = '0';
    waterMarkDom.style.bottom = '0';
    waterMarkDom.style.opacity = '0.5';

    const shadow = document.createElement('div');
    shadow.setAttribute('id', 'waterMarkContainer');
    let shadowDom = shadow.attachShadow({
      mode: 'open',
    });
    shadowDom.append(waterMarkDom);

    let observe = new MutationObserver(() => {
      alert('no!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    });

    document.body.appendChild(shadow);
    observe.observe(waterMarkDom, { attributes: true, childList: true, characterData: true, subtree: true });
  }
  destory() {
    if (document.getElementById('waterMarkContainer') !== null) {
      document.getElementById('waterMarkContainer').remove();
    }
  }
}

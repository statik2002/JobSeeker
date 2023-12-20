

let previewDoc = {
    canvasWidth: 100,
    canvasHeigth: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'gray',
    headerColor: 'balck',

    draw(canvas) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
    
            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(this.marginLeft, this.marginTop, this.canvasWidth - this.marginRight, this.canvasHeigth - this.marginBottom);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(this.marginLeft, this.marginTop, this.canvasWidth - this.marginRight, this.marginTop+100);

        } else {
            // Canvas not supported
            alert('Canvas is not supported in your browser.');
        }
    },

    resize() {
        let container = document.getElementById("canvasContainer");
        let canvas = document.getElementById("preview");
        canvas.setAttribute('width', container.offsetWidth);
        canvas.setAttribute('height', container.offsetHeight);
    }
}

function prepare() {
    let container = document.getElementById("canvasContainer");
    let canvas = document.getElementById("preview");
    canvas.setAttribute('width', container.offsetWidth);
    canvas.setAttribute('height', container.offsetHeight);
    
    preview.canvasWidth = canvas.offsetWidth;
    preview.canvasHeigth = canvas.offsetHeight;

    preview.draw(canvas);
}

let preview = previewDoc;

document.addEventListener("DOMContentLoaded", prepare());

window.addEventListener('resize', function(event){
    preview.resize;
  });
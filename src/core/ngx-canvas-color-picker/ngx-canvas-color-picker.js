"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class NgxCanvasColorPickerComponent {
    constructor() {
        this.width = 400;
        this.height = 400;
        this.square = true;
        this.close = true;
        this.open = true;
        this.hexData = new core_1.EventEmitter();
        this.rgbData = new core_1.EventEmitter();
        this.opacityCanvas = '1';
        this.opacityArray = [
            { value: '0.0' },
            { value: '0.1' },
            { value: '0.2' },
            { value: '0.3' },
            { value: '0.4' },
            { value: '0.5' },
            { value: '0.6' },
            { value: '0.7' },
            { value: '0.8' },
            { value: '0.9' },
            { value: '1.0' }
        ];
    }
    ngOnInit() {
        this.color = 'rgba(0, 0, 0, 1)';
        this.rgbLine = '0,0,0';
    }
    ngOnChanges(changes) {
        if (changes.open) {
            this.open = changes.open.currentValue;
        }
    }
    ngAfterViewInit() {
        this.imageObj = new Image();
        this.imageObj.src = './assets/color-picker.png';
        this.imageObj.onload = () => {
            this.create();
        };
    }
    create() {
        console.log('work');
        const padding = 0;
        const canvas = this.canvas.nativeElement;
        const context = canvas.getContext('2d');
        context.drawImage(this.imageObj, 0, 0, this.width, this.height);
        let mouseDown = false;
        context.strokeStyle = '#444';
        context.lineWidth = 2;
        canvas.addEventListener('mousedown', () => {
            mouseDown = true;
        }, false);
        canvas.addEventListener('mouseup', () => {
            mouseDown = false;
        }, false);
        canvas.addEventListener('mousemove', (evt) => {
            const mousePos = this.getMousePos(canvas, evt);
            // getting user coordinates
            if (mouseDown &&
                mousePos !== null &&
                mousePos.x > padding &&
                mousePos.x < padding + this.imageObj.width &&
                mousePos.y > padding &&
                mousePos.y < padding + this.imageObj.height) {
                const x = evt.pageX - canvas.offsetLeft;
                const y = evt.pageY - canvas.offsetTop;
                // getting image data and RGB values
                const img_data = context.getImageData(x, y, this.width, this.height).data;
                const R = img_data[0];
                const G = img_data[1];
                const B = img_data[2];
                const rgb = R + ',' + G + ',' + B;
                // convert RGB to HEX
                this.hex = this.rgbToHex(R, G, B);
                // making the color the value of the input
                this.rgbLine = `${R}, ${G}, ${B}`;
                this.rgb = `rgba(${R}, ${G}, ${B}, ${this.opacityCanvas})`;
                this.hexData.emit(this.hex);
                this.rgbData.emit(`${R}, ${G}, ${B}, ${this.opacityCanvas}`);
                this.color = this.rgb;
            }
        });
    }
    changeOpacity(opacity) {
        this.opacityCanvas = opacity;
    }
    getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    rgbToHex(R, G, B) {
        return this.toHex(R) + this.toHex(G) + this.toHex(B);
    }
    toHex(n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }
}
NgxCanvasColorPickerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ngx-canvas-color-picker',
                template: `
    <div (click)="open=!open" [style.background]="color" class="pick"></div>
    <div [hidden]="open">
    <canvas #canvas [width]="width" [height]="height" [style.opacity]="opacityCanvas" id="canvas_picker"></canvas>
    <div class="opacityContainer">
        <div 
          *ngFor="let opacity of opacityArray" 
          class="opacity" 
          [style.background]="'rgba('+rgbLine+', '+ opacity.value + ')'" 
          (click)="changeOpacity(opacity.value)" >
          <span *ngIf="opacityCanvas === opacity.value">^</span>
        </div>
      </div>
    </div>
  `,
                styles: [`
    canvas {
    cursor: crosshair;
    }
    .pick {
      width: 25px;
      height: 25px;
    }
    .opacity {
      width: 10px;
      height: 20px;
      float:left;
      margin: 1px solid black;
    }
    .opacityContainer{
      height: 25px;
    }

  `]
            },] },
];
/** @nocollapse */
NgxCanvasColorPickerComponent.ctorParameters = () => [];
NgxCanvasColorPickerComponent.propDecorators = {
    'width': [{ type: core_1.Input },],
    'height': [{ type: core_1.Input },],
    'square': [{ type: core_1.Input },],
    'close': [{ type: core_1.Input },],
    'open': [{ type: core_1.Input },],
    'hexData': [{ type: core_1.Output },],
    'rgbData': [{ type: core_1.Output },],
    'canvas': [{ type: core_1.ViewChild, args: ['canvas',] },],
};
exports.NgxCanvasColorPickerComponent = NgxCanvasColorPickerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1jYW52YXMtY29sb3ItcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBVXVCO0FBR3ZCO0lBaUNFO1FBN0JDLFVBQUssR0FBUSxHQUFHLENBQUM7UUFDakIsV0FBTSxHQUFRLEdBQUcsQ0FBQztRQUNsQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFDckMsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBS3RDLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLGlCQUFZLEdBQUc7WUFDYixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUNoQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1NBQ2pCLENBQUE7SUFJRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUEwQztRQUNwRCxFQUFFLENBQUEsQ0FBRSxPQUFPLENBQUMsSUFBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxH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LEVBQUUsRUFBRTtJQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtJQUM5QixRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBUyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRyxFQUFFLEVBQUU7Q0FDbkQsQ0FBQztBQXJMRixzRUFzTEMiLCJmaWxlIjoibmd4LWNhbnZhcy1jb2xvci1waWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIE5neENhbnZhc0NvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICByZ2I7IGhleDsgY29sb3I7IHJnYkxpbmU7XG5cbiAgIHdpZHRoOiBhbnkgPSA0MDA7XG4gICBoZWlnaHQ6IGFueSA9IDQwMDtcbiAgIHNxdWFyZTogYm9vbGVhbiA9IHRydWU7XG4gICBjbG9zZTogYm9vbGVhbiA9IHRydWU7XG4gICBvcGVuOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gICBoZXhEYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICByZ2JEYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIHB1YmxpYyBjYW52YXM6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGltYWdlT2JqOiBhbnk7XG4gIG9wYWNpdHlDYW52YXM6IHN0cmluZyA9ICcxJztcblxuICBvcGFjaXR5QXJyYXkgPSBbXG4gICAgeyB2YWx1ZTogJzAuMCcgfSxcbiAgICB7IHZhbHVlOiAnMC4xJyB9LFxuICAgIHsgdmFsdWU6ICcwLjInIH0sXG4gICAgeyB2YWx1ZTogJzAuMycgfSxcbiAgICB7IHZhbHVlOiAnMC40JyB9LFxuICAgIHsgdmFsdWU6ICcwLjUnIH0sXG4gICAgeyB2YWx1ZTogJzAuNicgfSxcbiAgICB7IHZhbHVlOiAnMC43JyB9LFxuICAgIHsgdmFsdWU6ICcwLjgnIH0sXG4gICAgeyB2YWx1ZTogJzAuOScgfSxcbiAgICB7IHZhbHVlOiAnMS4wJyB9XG4gIF1cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDEpJztcbiAgICB0aGlzLnJnYkxpbmUgPSAnMCwwLDAnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgaWYoIGNoYW5nZXMub3BlbiApIHtcbiAgICAgIHRoaXMub3BlbiA9IGNoYW5nZXMub3Blbi5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIHRoaXMuaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlT2JqLnNyYyA9ICcuL2Fzc2V0cy9jb2xvci1waWNrZXIucG5nJztcbiAgICB0aGlzLmltYWdlT2JqLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfTtcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCd3b3JrJyk7XG5cbiAgICBjb25zdCBwYWRkaW5nID0gMDtcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU9iaiwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKTtcbiAgICBsZXQgbW91c2VEb3duID0gZmFsc2U7XG5cbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyM0NDQnO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBtb3VzZURvd24gPSB0cnVlO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldnQpID0+IHtcbiAgICAgIGNvbnN0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAvLyBnZXR0aW5nIHVzZXIgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChcbiAgICAgICAgbW91c2VEb3duICYmXG4gICAgICAgIG1vdXNlUG9zICE9PSBudWxsICYmXG4gICAgICAgIG1vdXNlUG9zLnggPiBwYWRkaW5nICYmXG4gICAgICAgIG1vdXNlUG9zLnggPCBwYWRkaW5nICsgdGhpcy5pbWFnZU9iai53aWR0aCAmJlxuICAgICAgICAgbW91c2VQb3MueSA+IHBhZGRpbmcgJiZcbiAgICAgICAgIG1vdXNlUG9zLnkgPCBwYWRkaW5nICsgdGhpcy5pbWFnZU9iai5oZWlnaHRcbiAgICAgICkge1xuICAgICAgICBjb25zdCB4ID0gZXZ0LnBhZ2VYIC0gY2FudmFzLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldnQucGFnZVkgLSBjYW52YXMub2Zmc2V0VG9wO1xuICAgICAgICAvLyBnZXR0aW5nIGltYWdlIGRhdGEgYW5kIFJHQiB2YWx1ZXNcbiAgICAgICAgY29uc3QgaW1nX2RhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkuZGF0YTtcbiAgICAgICAgY29uc3QgUiA9IGltZ19kYXRhWzBdO1xuICAgICAgICBjb25zdCBHID0gaW1nX2RhdGFbMV07XG4gICAgICAgIGNvbnN0IEIgPSBpbWdfZGF0YVsyXTsgIGNvbnN0IHJnYiA9IFIgKyAnLCcgKyBHICsgJywnICsgQjtcbiAgICAgICAgLy8gY29udmVydCBSR0IgdG8gSEVYXG4gICAgICAgIHRoaXMuaGV4ID0gdGhpcy5yZ2JUb0hleChSLCBHLCBCKTtcbiAgICAgICAgLy8gbWFraW5nIHRoZSBjb2xvciB0aGUgdmFsdWUgb2YgdGhlIGlucHV0XG4gICAgICAgIHRoaXMucmdiTGluZSA9IGAke1J9LCAke0d9LCAke0J9YDtcbiAgICAgICAgdGhpcy5yZ2IgPSBgcmdiYSgke1J9LCAke0d9LCAke0J9LCAke3RoaXMub3BhY2l0eUNhbnZhc30pYDtcbiAgICAgICAgdGhpcy5oZXhEYXRhLmVtaXQodGhpcy5oZXgpO1xuICAgICAgICB0aGlzLnJnYkRhdGEuZW1pdChgJHtSfSwgJHtHfSwgJHtCfSwgJHt0aGlzLm9wYWNpdHlDYW52YXN9YCk7XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLnJnYjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU9wYWNpdHkob3BhY2l0eSkge1xuICAgIHRoaXMub3BhY2l0eUNhbnZhcyA9IG9wYWNpdHk7XG4gIH1cblxuICBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCkge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG4gIH1cblxuICByZ2JUb0hleCAoUiwgRywgQikge1xuICAgIHJldHVybiB0aGlzLnRvSGV4KFIpICsgdGhpcy50b0hleChHKSArIHRoaXMudG9IZXgoQik7XG4gIH1cblxuICB0b0hleChuKSB7XG4gICAgbiA9IHBhcnNlSW50KG4sMTApO1xuICAgIGlmIChpc05hTihuKSkgcmV0dXJuIFwiMDBcIjtcbiAgICBuID0gTWF0aC5tYXgoMCxNYXRoLm1pbihuLDI1NSkpO1xuICAgIHJldHVybiBcIjAxMjM0NTY3ODlBQkNERUZcIi5jaGFyQXQoKG4tbiUxNikvMTYpICArIFwiMDEyMzQ1Njc4OUFCQ0RFRlwiLmNoYXJBdChuJTE2KTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ25neC1jYW52YXMtY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IChjbGljayk9XCJvcGVuPSFvcGVuXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiY29sb3JcIiBjbGFzcz1cInBpY2tcIj48L2Rpdj5cbiAgICA8ZGl2IFtoaWRkZW5dPVwib3BlblwiPlxuICAgIDxjYW52YXMgI2NhbnZhcyBbd2lkdGhdPVwid2lkdGhcIiBbaGVpZ2h0XT1cImhlaWdodFwiIFtzdHlsZS5vcGFjaXR5XT1cIm9wYWNpdHlDYW52YXNcIiBpZD1cImNhbnZhc19waWNrZXJcIj48L2NhbnZhcz5cbiAgICA8ZGl2IGNsYXNzPVwib3BhY2l0eUNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcGFjaXR5IG9mIG9wYWNpdHlBcnJheVwiIFxuICAgICAgICAgIGNsYXNzPVwib3BhY2l0eVwiIFxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIidyZ2JhKCcrcmdiTGluZSsnLCAnKyBvcGFjaXR5LnZhbHVlICsgJyknXCIgXG4gICAgICAgICAgKGNsaWNrKT1cImNoYW5nZU9wYWNpdHkob3BhY2l0eS52YWx1ZSlcIiA+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJvcGFjaXR5Q2FudmFzID09PSBvcGFjaXR5LnZhbHVlXCI+Xjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIGNhbnZhcyB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgfVxuICAgIC5waWNrIHtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAub3BhY2l0eSB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICBtYXJnaW46IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICAgLm9wYWNpdHlDb250YWluZXJ7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gIGBdXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nd2lkdGgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naGVpZ2h0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3NxdWFyZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjbG9zZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidvcGVuJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2hleERhdGEnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3JnYkRhdGEnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2NhbnZhcyc6IFt7IHR5cGU6IFZpZXdDaGlsZCwgYXJnczogWydjYW52YXMnLCBdIH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==
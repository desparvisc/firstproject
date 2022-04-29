const container = {
    width: "",
    height "",
    setWidth: function (width) {
        this.width = width;
    },
    setHeight: function (height) {
        this.height = height;
    },
        
    
};
const element = document.getElementById('js');
element.innerHTML += `height :, width: `;
container.setWidth(100);
container.setHeight(350);
element.innerHTML += `height: ${container.height}, width: ${container.width}`;

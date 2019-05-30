'use strict';
function Button (text, name){
    this.text = text || 'Hello';
    this.name = name;
};

Button.prototype = {
    create: function(){
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = (this.text + ' ' + this.name);
        document.body.appendChild(this.element);
        this.element.addEventListener('click', function(){
            alert(self.text + ' ' + self.name);
        });
    }
};

var btn1 = new Button('Hello', 'Tomek');
btn1.create();


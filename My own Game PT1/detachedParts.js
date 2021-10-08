class DetachedParts {
    constructor (x,y,width,height,image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.sprite = createSprite(x,y,width,height);
        this.sprite.addImage (image)
    }

    resize(s){
        this.sprite.scale = s;
    }

  
}
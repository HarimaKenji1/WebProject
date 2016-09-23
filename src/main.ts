class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

function PrintaTree (totalline: number) :void {
   var part : number = 0;
   var currentline : number = 0; 
   var floor : string = "";
   for( currentline = 0 ; currentline < totalline ; currentline++){
       floor = "";
       for(part = 0 ; part < totalline * 2 - 1 ; part++ ){
           if( part < totalline - 1 - currentline)
              floor += " ";
           if( part >= totalline - 1 - currentline && part <= totalline + currentline - 1 )
              floor += "*";
       }
       console.log(floor);
   }
   for(var rootline : number = 0; rootline < totalline / 2 ; rootline++ ){
       floor = "";
       for(var treepart : number = 0; treepart < totalline * 2 - 1; treepart++){
           if( treepart < totalline / 2)
              floor += " ";
           if( totalline <= 3){
           if( treepart >= totalline / 2 && treepart < totalline * 3 / 2 - 2)
              floor += "|"; 
           }
           if( totalline > 3 ){
                if( treepart >= totalline / 2 && treepart <= totalline * 3 / 2 - 2 )
              floor += "|"; 
             
           }

       }
       console.log(floor);
   }
  
}


window.onload = () => {

    PrintaTree(6);

    
};

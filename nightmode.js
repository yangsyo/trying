
      var body ={
        setcolor : function(color){
          document.querySelector('body').style.color = color;
        }

        ,
        setbackcolor : function(color){
          document.querySelector('body').style.backgroundColor = color;
        }
        }

        var link = {
          setlinkcolor : function(color){
            var alist = document.querySelectorAll('a');
            var i = 0;
            while (i<alist.length) {
            alist[i].style.color = color;
              i++
          }
        }
      }


      function day_night_controller(self){
        if(self.value === 'night mode'){
        body.setbackcolor('black');
        body.setcolor('white');
        link.setlinkcolor('white');
        self.value = 'day mode';
      }else{
        body.setbackcolor('white');
        body.setcolor('black');
        link.setlinkcolor('black');
        self.value = 'night mode';
      }
      }

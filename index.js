   anime({
            targets:".bottomBar",
            width: 100 + "%",
            direction: "alternate",
            loop: true,
            easing:"easeInOutSine"
        })
        anime({
            targets:".rightBar",
            height: 100 + "%",
            top: 0,
            direction: "alternate",
            loop: true,
            easing:"easeInOutSine"
        })
        anime({
            targets:".leftBar",
            height: 100 + "%",
            direction: "alternate",
            loop: true,
            easing:"easeInOutSine"
        })
        anime({
            targets:".topBar",
            width: 0 + "%",
            direction: "alternate",
            loop: true,
            easing:"easeInOutSine"
        })
      anime({
            targets: '.backgroundGrid',
          scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
          ],
          direction: "alternate",
          backgroundColor: "rgb(166, 157, 207)",
          delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
          loop:true
});

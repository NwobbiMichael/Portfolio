$(document).ready(function() {

    const c = console.log.bind(document);
    const windowHeight = $(window).height();
    const landerMainHeight = $("#lander-main").height();
    var landerHeight = windowHeight - 70;
    const landerMainPadding = (landerHeight - landerMainHeight)/2;
    const navBar = $("#navBar");
    const body = $("body");
    const num = 70;

    $("header").height(windowHeight);
    $("#lander").height(landerHeight); 
    $("#lander").css({
        "padding-top": landerMainPadding,
        "padding-bottom": landerMainPadding
    });
    
    setTimeout(function() {
        $(".button-main").addClass("appearFromBelow");
    }, 2000);

    //MOBILE TOGGLER
    $("#mobile-toggler").click(function() {
        $("#mobile-menu").slideToggle(1000);
    });
    $("#mobile-menu").click(function() {
        $("#mobile-menu").slideToggle(1000);
    });
    //MOBILE TOGGLER




    //LANDER ANIMATION
    const stackArray = [
        ["F", "u", "l", "l", "s", "t", "a", "c", "k", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r",], 
        ["U", "I", "/", "U", "X", " ", "D", "e", "s", "i", "g", "n", "e", "r"], 
        ["S", "o", "f", "t", "w", "a", "r", "e", " ", "E", "n", "g", "i", "n", "e", "e", "r"]
    ];
    const stackArrayLen = stackArray.length;

    const sleep = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        });
    };

    const writeJsText = async () => {
        //Blinking cursor
        setInterval(function() {
            $("#js-cursor").addClass("not-visible");
            setTimeout(function() {
                $("#js-cursor").removeClass("not-visible");
            }, 250);
        }, 500); //End of blinking cursor

        for (var i = 0; i < stackArrayLen; i++) {
            for (j = 0; j <= stackArray[i].length; j++) {
                await sleep(300);
                $("#js-text").append(stackArray[i][j]);
            };
            await sleep(500);
            for (j = 0; j <= stackArray[i].length; j++) {
                await sleep(100);
                $("#js-text").each(function() {
                    let t = $(this).text();
                    let w = stackArray[i][j];
                    if (w == " ") {
                        t = t.replace(/\s/, "");
                    };
                    t = t.replace(/\w$/, "");
                    $(this).text(t);
                });
            };
            $("#js-text").empty();
        };
    };
      
    writeJsText()
    setInterval(() => {
        writeJsText();
    }, 25000);
    //LANDER ANIMATION




    //STICKY NAV ANIMATION
    var firstScroll = $(window).scrollTop();
    $(window).scroll(function() {
        var secondScroll = $(window).scrollTop();
        if ($(window).scrollTop() < num) {
            navBar.removeClass("sticky");
            navBar.removeClass("sticky-bg");
        } else {
            if (secondScroll > firstScroll + 5) {
                navBar.removeClass("sticky");
                navBar.removeClass("sticky-bg");
            } else if (secondScroll + 5 <= firstScroll) {
                navBar.addClass("sticky");
                navBar.addClass("sticky-bg");
            };
        };
        firstScroll = secondScroll;
    });
    //STICKY NAV ANIMATION




    //BUTTON CLICK
    $(".button-1").click(function() {
        window.location.href='#footer';
    });
    $(".button-main").click(function() {
        window.location.href='#footer';
    });
    $(".button-3").click(function() {
        $("#closeModal").addclass("flex-center")
        $(".codeModal").fadeIn(500, function() {
            $("#closeModal").fadeIn(500)
        });
    });
    $(".fa-times").click(function() {
        $(".codeModal").fadeOut(500);
        $("#closeModal").fadeOut(500);
    });
    



    //ABOUT ANIMATION
    const aboutArray = [
        ["c", "o", "d", "i", "n", "g"], 
        ["d", "e", "s", "i", "g", "n", "i", "n", "g"], 
        ["i", "n", "o", "v", "a", "t", "i", "n", "g"]
    ];
    const aboutArrayLen = aboutArray.length;
    
    const sleepTwo = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        });
    };

    const writeAboutText = async () => {
        //Blinking cursor
        setInterval(function() {
            $("#js-cursor-two").addClass("not-visible");
            setTimeout(function() {
                $("#js-cursor-two").removeClass("not-visible");
            }, 250);
        }, 500); //End of blinking cursor

        for (var x = 0; x < aboutArrayLen; x++) {
            for (y = 0; y < aboutArray[x].length; y++) {
                await sleepTwo(300);
                $("#about-text").append(aboutArray[x][y]);
            };
            await sleepTwo(300);
            for (y = 0; y < aboutArray[x].length; y++) {
                await sleepTwo(100);
                $("#about-text").each(function() {
                    let t = $(this).text();
                    let w = aboutArray[x][y];
                    t = t.replace(/\w$/, "");
                    $(this).text(t);
                });
            };
            $("#about-text").empty();
        };
    };
    
    writeAboutText()
    setInterval(() => {
        writeAboutText();
    }, 11000);
    //ABOUT ANIMATION


    
    //SKILLS DIV HOVER ANIMATION
    $(".skills-div").hover(function() {
        $(this).addClass("addHoverAnimate-two");
        $(this).children("p").css("visibility", "visible");
    }, function() {
        $(this).removeClass("addHoverAnimate-two")
        if ($(this).hasClass(two())) {
            $(this).children("p").css("visibility", "visible");
        } else{
            $(this).children("p").css("visibility", "hidden");
        };
    });

    const skillsNumberArray = [$(".0"), $(".1"), $(".2"), $(".3"), $(".4"), $(".5")];        
    
    function randomSkillsNumber() {
        return Math.floor(Math.random() * 5);
    };

    var randNum;
    function skillsAnimation() {
        randNum = randomSkillsNumber();

        function showSkills() {
            if ($(".skills-div").hasClass("addHoverAnimate-two")) {
                for (i = 0; i < 6; i++) {
                    skillsNumberArray[i].removeClass("addHoverAnimate");
                    skillsNumberArray[i].children("p").css("visibility", "hidden");
                };
                $(".addHoverAnimate-two").children("p").css("visibility", "visible");
            } else {
                for (i = 0; i < 6; i++) {
                    skillsNumberArray[i].removeClass("addHoverAnimate");
                    skillsNumberArray[i].children("p").css("visibility", "hidden");
                };
                skillsNumberArray[randNum].children("p").css("visibility", "visible");
                skillsNumberArray[randNum].addClass("addHoverAnimate");
            };
        };

        if (randNum == 0) {
            showSkills()
        } else if (randNum == 1) {
            showSkills()
        } else if (randNum == 2) {
            showSkills()
        } else if (randNum == 3) {
            showSkills()
        } else if (randNum == 4) {
            showSkills()
        } else if (randNum == 5) {
            showSkills()
        };
    };

    function two() {
        var var2 = randNum;
        return var2
    };
    
    skillsAnimation();
    setInterval(() => {
        skillsAnimation()
    }, 3000);
    //SKILLS DIV HOVER ANIMATION




    //FOOTER
    $("#socials").children("a").hover(function() {
        $(this).addClass("socialsOnHover");
    }, function() {
        $(this).removeClass("socialsOnHover");
    });
    //FOOTER




    //APPEAR FROM BOTTOM ANIMATION
    function isInViewport(element) {
        var elementTop = element.offset().top;
        var elementHeight = element.height();
        var elementBottom = elementTop + elementHeight;

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementTop < viewportBottom && elementBottom > viewportTop;// && elementBottom < viewportBottom;
    };

    const sleepTest = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        });
    };
    
    const toBeAnimatedArray = [
            $(".services-div-1"), 
            $(".services-div-2"),
            $(".services-div-3"),
            $(".services-div-4"),
            $(".services-div-5"),
            $(".button-1"),
            $(".button-2"),
            $(".button-3"),
            $(".button-4")
        ];
    const toBeAnimatedArrayLen = toBeAnimatedArray.length;
    
    const appearFromBelow = async () => {
        for (var z = 0; z < toBeAnimatedArrayLen; z++) {
            if (isInViewport(toBeAnimatedArray[z]) && !toBeAnimatedArray[z].hasClass("appearFromAbove")) {
                await sleepTest(250)
                toBeAnimatedArray[z].addClass("appearFromBelow")
            };
        };
    };

    const appearFromAbove = async () => {
        for (var z = 0; z < toBeAnimatedArrayLen; z++) {
            if (isInViewport(toBeAnimatedArray[z]) && !toBeAnimatedArray[z].hasClass("appearFromBelow")) {
                await sleepTest(250)
                toBeAnimatedArray[z].addClass("appearFromAbove")
            };
        };
    };

    var scroll1 = $(window).scrollTop();
    $(window).scroll(function() {
        var scroll2 = $(window).scrollTop();
        if (scroll2 > scroll1 + 5) {
            appearFromBelow()
        } else if (scroll2 + 5 <= scroll1) {
            appearFromAbove()
        };
        scroll1 = scroll2;
    });
    













});

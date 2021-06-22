 $('documnet').ready(function() {

    $('.navbar-toggler').on('click',function(){
        $('.sidebar-left').toggleClass('active');
    });/*** menu */

    $('.search-trigger').on('click',function(){
        $('.search-area').addClass('active');
    });/*** search-open */ 

    $('.search-bar-close').on('click',function(){
        $('.search-area').removeClass('active');
    });/*** search-close */ 

    $('.profile-trigger').on('click',function(){
        $('.profile-setting').toggleClass('active');
    });/*** search-close */

    /*** Header height = gutter height */
    function setGutterHeight(){
        var header = document.querySelector('.header'),
            gutter = document.querySelector('.headergutter'),
            footer = document.querySelector('.footer');
            footerGutter = document.querySelector('.content-wrapper');

        if ( gutter ) {
            gutter.style.height = header.offsetHeight + 'px';
        }
        
        console.log(gutter);

        if ( footerGutter ) {
            footerGutter.style.paddingBottom = footer.offsetHeight + 'px';
        }
    }
    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;

    // Higher number = more zoom  // Scroll to zoom img
    let scaleAmount = .6;

    function scrollZoom() {
      const images = document.querySelectorAll("[data-scroll-zoom]");
      let scrollPosY = 0;
      scaleAmount = scaleAmount / 100;

      const observerConfig = {
        rootMargin: "0% 0% 0% 0%",
        threshold: 0
      };

      // Create separate IntersectionObservers and scroll event listeners for each image so that we can individually apply the scale only if the image is visible
      images.forEach(image => {
        let isVisible = false;
        const observer = new IntersectionObserver((elements, self) => {
          elements.forEach(element => {
            isVisible = element.isIntersecting;
          });
        }, observerConfig);

        observer.observe(image);

        // Set initial image scale on page load
        image.style.transform = `scale(${1 + scaleAmount * percentageSeen(image)})`;

        // Only fires if IntersectionObserver is intersecting
        window.addEventListener("scroll", () => {
          if (isVisible) {
            scrollPosY = window.pageYOffset;
            image.style.transform = `scale(${1 +
              scaleAmount * percentageSeen(image)})`;
          }
        });
      });

      // Calculates the "percentage seen" based on when the image first enters the screen until the moment it leaves
      // Here, we get the parent node position/height instead of the image since it's in a container that has a border, but
      // if your container has no extra height, you can simply get the image position/height
      function percentageSeen(element) {
        const parent = element.parentNode;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const elPosY = parent.getBoundingClientRect().top + scrollY;
        const borderHeight = parseFloat(getComputedStyle(parent).getPropertyValue('border-bottom-width')) + parseFloat(getComputedStyle(element).getPropertyValue('border-top-width'));
        const elHeight = parent.offsetHeight + borderHeight;

        if (elPosY > scrollY + viewportHeight) {
          // If we haven't reached the image yet
          return 0;
        } else if (elPosY + elHeight < scrollY) {
          // If we've completely scrolled past the image
          return 100;
        } else {
          // When the image is in the viewport
          const distance = scrollY + viewportHeight - elPosY;
          let percentage = distance / ((viewportHeight + elHeight) / 100);
          percentage = Math.round(percentage);

          return percentage;
        }
      }
    }

    scrollZoom();

    /*/// magnific popup ///*/
    $('[data-scroll-zoom]').magnificPopup({ 
        // delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        image: {
            verticalFit: true
        },
        mainClass: 'mfp-no-margins mfp-with-zoom',

        zoom: {
            enabled: true,
            duration: 200 
        }
    });

     $('.preview-trigger, .help-trigger, .post-more-trigger').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        midClick: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    // print 
    $('.print').on('click', function() { // select print button with class "print," then on click run callback function
       $.print('.post-item'); // inside callback function the section with class "content" will be printed
    });

    // $('.print').on('click',function(){
    //    print('.post-body');
    // });/*** search-close */
    

    // EDITOR 
    const rules = [
      {
        // name: "Block quote",
        pattern: /> ?((\w|\d|=| |>|<|-{0,2}|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|;){0,})\n/g,
        replace: "<div class='quote'>$1</div>"
      },
      {
        // name: "H1",
        pattern: /# ((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:|\\|`)+)\n/g,
        replace: "<h6>$1</h6>"
      },
      {
        // name: "Line breaks",
        pattern: /\n+/g,
        replace: "<br>"
      },
      {
        // name: "Images with title",
        pattern: /\!\[((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|&|\?|=)+) +"(([0-9a-zA-Z]| |!|\?|#|=)+)" {0,}\)/g,
        replace: "<div class='media'><img data-scroll-zoom src='$3' href='$3' title='$5' alt='$1' height='30%'></div>"
      },
      {
        // name: "Images",
        pattern: /\!\[((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|&|\?|=)+)\)/g,
        replace: "<div class='media'><img data-scroll-zoom src='$3' href='$3' alt='$1' height='30%'></div>"
      },
      {
        // name: "Links",
        pattern: /\[\\?((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|\?|=|&)+)\)/g,
        replace: "<a target='_blank' href='$3'>$1</a>"
      },
      {
        // name: "Links with title",
        pattern: /\[((\w| )+)\]\((https?\:\/{2}(\w|\.|\/|\d|-|#|&)+) +"(([0-9a-zA-Z]| |!|\?|=)+)" {0,}\)/g,
        replace: "<a target='_blank' href='$3'>$5</a>"
      },
      {
        // name: "Horizontal line",
        pattern: /(-{3,}|_{3,}|\*{3,})<br>/g,
        replace: "<hr>"
      },
      {
        // name: "Bold",
        pattern: /(\_{2}|\*{2})((\w| |\(|\)|\[|\]|\/|\.|\,|\:|<|>|=|"|'|#)+)(\_{2}|\*{2})/g,
        replace: "<b>$2</b>"
      },
      {
        // name: "Italic",
        pattern: /(\_{1}|\*{1})((\w| |\(|\)|\[|\]|\/|\.|\,|\:|#)+)(\_{1}|\*{1})/g,
        replace: "<em>$2</em>"
      },
      {
        // name: "Strikethrough",
        pattern: /\~{2}((\w| |\(|\)|\[|\]|\/|\.|\,|\:|#)+)\~{2}/g,
        replace: "<strike>$1</strike>"
      },
      {
        // name: "Marked",
        pattern: /==((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:)+)==/g,
        replace: "<mark>$1</mark>"
      },
      {
        // name: "Insert",
        pattern: /\+{2}((\w|\d|=| |-{0,2}|>|<|{|}|\[|\]|\(|\)|"|'|\/|=|\.|:)+)\+{2}<br>/,
        replace: "<ins>$1</ins><br>"
      },
      {
        // name: "Code block",
        pattern: /`{3}(\w| ){0,}<br>(.*?)`{3}/g,
        replace: "<pre class='code-block'><code>$2</code></pre>"
      },
      {
        // name: "Inline code",
        pattern: /`(.*?)`/g,
        replace: "<span class='code-inline'>$1</span>"
      },
      {
        // name: "Copyright",
        pattern: /\((c|C)\)/g,
        replace: "©"
      },
      {
        // name: "R thing",
        pattern: /\((r|R)\)/g,
        replace: "®"
      },
      {
        // name: "Trademark",
        pattern: /\((tm|TM)\)/g,
        replace: "™"
      },
      {
        // name: "Paragraph",
        pattern: /\((p|P)\)/g,
        replace: "§"
      },
      {
        // name: "Plus minus",
        pattern: /\+-/g,
        replace: "±"
      },
      {
        // name: "---",
        pattern: /---/g,
        replace: "—"
      },
      {
        // name: "--",
        pattern: /--/g,
        replace: "–"
      },
      {
        // name: ",",
        pattern: /,,/g,
        replace: ","
      },
      {
        // name: "???",
        pattern: /\?{3,}/g,
        replace: "???"
      },
      {
        // name: "!!!",
        pattern: /!{3,}/g,
        replace: "!!!"
      },
      {
        // name: "?..",
        pattern: /\?\.{3,}/g,
        replace: "?.."
      },
      {
        // name: "!..",
        pattern: /\!\.{3,}/g,
        replace: "!.."
      },
      {
        // name: "...",
        pattern: /\.{2,}/g,
        replace: "…"
      },
      {
        // name: "Autoconvert link",
        pattern: /(https?:\/\/(\w|\d|\.|-|\/|#|\?|=|&)+) /g,
        replace: "<a href='$1'>$1</a> "
      },
      {
        // name: "Autoconvert link with linebreak",
        pattern: /(https?:\/\/(\w|\d|\.|-|\/|#|\?|=|&)+)<br>/g,
        replace: "<a href='$1'>$1</a><br>"
      }
    ];
    const $editor = document.getElementById("coustom-edit"),
      $result = document.getElementById("coustom-result"),
      $helpinput = document.getElementById("help-input"),
      $helpoutput = document.getElementById("help-output");

    function renderMarkdownPreview() {
      let text = $editor.innerText;
      let help_text = $helpinput.innerText;

      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        text = text.replace(rule.pattern, rule.replace);
      }
      $result.innerHTML = text;

      for (let i = 0; i < rules.length; i++) {
        const help_rule = rules[i];
        console.log(text);
        help_text = help_text.replace(help_rule.pattern, help_rule.replace);
      }
      $helpoutput.innerHTML = help_text;
    }
    $editor.addEventListener("keyup", event => {
      renderMarkdownPreview();
    });
    $helpinput.addEventListener("keyup", event => {
      renderMarkdownPreview();
    });
    renderMarkdownPreview(); 

    ///** END COUSTOM EDITORS
});
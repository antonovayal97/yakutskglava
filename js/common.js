document.addEventListener("DOMContentLoaded",(event) => {

  let mainBannerElement = document.querySelector('.main-banner__swiper')
  let mainBannerSwiper = new Swiper('.main-banner__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    cssMode: true,
    pagination: {
      el: ".blogSwiper-pagination",
    },
    breakpoints: {
      744:
      {
        cssMode: false,
      }
    }
  })


  let mainNumbers = new Swiper('.main-numbers__swiper', {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false,
    cssMode: false,
    // breakpoints: {
    //
    //   744:
    //   {
    //     cssMode: false,
    //   }
    // }
  })

  window.addEventListener("resize", () => {
    setTimeout(() => {
              mainNumbers.destroy();
              mainNumbers = new Swiper('.main-numbers__swiper', {
                slidesPerView: "auto",
                spaceBetween: 0,
                loop: false,
                cssMode: false,
                // breakpoints: {
                //   744:
                //   {
                //     cssMode: false,
                //   }
                // }
              })
        },10)
  });
  window.addEventListener("resize", () => {
    setTimeout(() => {
              mainBannerSwiper.destroy();
              mainBannerSwiper = new Swiper('.main-banner__swiper', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                cssMode: true,
                pagination: {
                  el: ".blogSwiper-pagination",
                },
                breakpoints: {
                  744:
                  {
                    cssMode: false,
                  }
                }
              })
        },10)
    console.log('sadas')
  });
  let header = document.querySelector('header')
  let headerInner = document.querySelector('.header')
  let footer = document.querySelector('footer')
  let socialsRight = document.querySelector('.socials-right')
  let socialTimeout = setTimeout(() => {
    socialsRight.classList.add('socials-right_hidden')
  },3000)
  let posY = 0
let topical = document.querySelector('.topical')

if(topical != undefined)
{
  let topicalSwiper = new Swiper('.topical-swiper', {
    slidesPerView: 'auto',
    cssMode: true,
    breakpoints: {
      744:
      {
        cssMode: false,
      }
    }
  })
  window.addEventListener("resize", () => {
    setTimeout(() => {
              topicalSwiper.destroy();
              topicalSwiper = new Swiper('.topical-swiper', {
                slidesPerView: 'auto',
                cssMode: true,
                breakpoints: {
                  744:
                  {
                    cssMode: false,
                  }
                }
              })
        },10)
  });
}

let newsDetailSwiper = document.querySelectorAll('.news-detail__images-with-swiper')


newsDetailSwiper.forEach((item, i) => {
  let d = item.querySelector('.news-detail__swiper')
  let nDS = new Swiper(d, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    cssMode: true,
    breakpoints: {
      744:
      {
        cssMode: false,
      }
  },
  pagination: {
    el: ".news-detail__swiper-pagination",
  },
  })

  window.addEventListener("resize", () => {
    setTimeout(() => {
              nDS.destroy();
              nDS = new Swiper(d, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                cssMode: true,
                breakpoints: {
                  744:
                  {
                    cssMode: false,
                  }
              },
              pagination: {
                el: ".news-detail__swiper-pagination",
              },
              })
        },10)
  });

  let next = item.querySelector('.news-detail__swiper-buttons-next')
  let prev = item.querySelector('.news-detail__swiper-buttons-prev')
  next.addEventListener('click',() => {
    nDS.slideNext();
  })
  prev.addEventListener('click',() => {
    nDS.slidePrev();
  })
});



if(mainBannerElement != undefined)
{
  let next = mainBannerElement.querySelector('.main-banner__btn-left')
  let prev = mainBannerElement.querySelector('.main-banner__btn-right')
  next.addEventListener('click',() => {
    mainBannerSwiper.slidePrev();
  })
  prev.addEventListener('click',() => {
    mainBannerSwiper.slideNext();
  })

  console.log(mainBannerElement.clientHeight)
  console.log(mainBannerElement.getBoundingClientRect().top, 'top')
  console.log(headerInner.getBoundingClientRect().top,'top2')
  if(mainBannerElement.getBoundingClientRect().top < headerInner.getBoundingClientRect().top && mainBannerElement.getBoundingClientRect().top >  - mainBannerElement.clientHeight/2 + headerInner.getBoundingClientRect().top)
  {
    header.classList.add('header_opacity')
  }
  else
  {
    header.classList.remove('header_opacity')
  }
}

  let districtElement = document.querySelector('.district__banner')
  let upButton = document.querySelector('.up-button')
  if(upButton != undefined)
  {
  upButton.addEventListener('click',() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
  }
  document.addEventListener('scroll',() => {
    if(upButton != undefined)
    {
      if(this.scrollY > 900)
      {
        upButton.style.display = 'flex'
      }
      else
      {
        upButton.style.display = 'none'
      }
    }
  if(this.scrollY > posY && this.scrollY > 100 )
  {
    // высота 735
    // топ 80 - (735 - 2*80)

    //console.log(this.scrollY,posY )
      socialsRight.classList.add('socials-right_hidden')
      clearTimeout(socialTimeout);
    posY = this.scrollY - 3
    header.classList.add('header_scrolled')
    if(upButton != undefined)
    {
      upButton.classList.remove('up-button_up')
    }
  }
  else
  {
    socialsRight.classList.remove('socials-right_hidden')
    clearTimeout(socialTimeout);
    socialTimeout = setTimeout(() => {
      socialsRight.classList.add('socials-right_hidden')
    },3000)
    header.classList.remove('header_scrolled')
    posY = this.scrollY;
    if(upButton != undefined)
    {
      upButton.classList.add('up-button_up')
    }
    //console.log('das')
  }
  if(this.scrollY + this.innerHeight > document.body.clientHeight - (footer.clientHeight + 100))
  {
    if(upButton != undefined)
    {
      upButton.style.display = 'none'
    }
  }
  else
  {
    if(upButton != undefined)
    {
    }
  }
  if(mainBannerElement != undefined)
  {


    console.log(mainBannerElement.clientHeight)
    console.log(mainBannerElement.getBoundingClientRect().top, 'top')
    console.log(headerInner.getBoundingClientRect().top,'top2')
    if(mainBannerElement.getBoundingClientRect().top < headerInner.getBoundingClientRect().top && mainBannerElement.getBoundingClientRect().top >  - mainBannerElement.clientHeight/2 + headerInner.getBoundingClientRect().top)
    {
      header.classList.add('header_opacity')
    }
    else
    {
      header.classList.remove('header_opacity')
    }
  }

  if(districtElement != undefined)
  {
    console.log(districtElement.clientHeight)
    console.log(districtElement.getBoundingClientRect().top, 'top')
    console.log(headerInner.getBoundingClientRect().top,'top2')
    if(districtElement.getBoundingClientRect().top < headerInner.getBoundingClientRect().top && districtElement.getBoundingClientRect().top >  - districtElement.clientHeight/2 + headerInner.getBoundingClientRect().top)
    {
      header.classList.add('header_opacity')
    }
    else
    {
      header.classList.remove('header_opacity')
    }
  }
   if(this.scrollY + this.innerHeight > document.body.clientHeight - (footer.clientHeight - 200))
   {
     socialsRight.classList.add('socials-right_hidden')
   }
   else
   {
     //socialsRight.classList.remove('socials-right_hidden')
   }



})

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


let headerLi = document.querySelectorAll('.header__menu-li')
let thisUrl = window.location.pathname
headerLi.forEach((item, i) => {
  let a = item.querySelector('a')
  console.log(a.href, thisUrl)
  if(a.href.includes(thisUrl) && thisUrl != '/yakutskglava/')
  {
    item.classList.add('header__menu-active')
  }
});



let blogs = document.querySelectorAll('.blog__item')

blogs.forEach((item, i) => {
  let btn = item.querySelector('.button')
  let text = item.querySelector('.blog__item-text')
  btn.addEventListener('click', () => {
    item.classList.add('blog__item_active')
    btn.style.display = 'none';
  })
});



let datePickers = document.querySelectorAll('.left-menu__date-picker')

datePickers.forEach((item, i) => {
  let arrow = item.querySelector('.date-picker__arrow')
  let placeholder = item.querySelector('.date-picker__placeholder')
  let input = item.querySelector('input')
  input.onclick = () => {
    item.classList.add('left-menu__date-picker_open')
  }
  input.onfocus = () => {
    item.classList.add('left-menu__date-picker_open')
  }
  input.onblur = () => {
    item.classList.remove('left-menu__date-picker_open')
  }
  input.onchange = () => {
    item.classList.remove('left-menu__date-picker_open')
    let year = input.value.substr(2, 2)
    let month = input.value.substr(5, 2)
    let day = input.value.substr(8, 2)
    placeholder.innerText = day + '.' + month + '.' + year;
  }
  // input.addEventListener('click', () => {
  //   item.classList.toggle('.left-menu__date-picker_open')
  // })
});





function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
let cookieAlert = document.querySelector('.cookie')
if(cookieAlert != undefined)
{
  let cookieBtn = document.querySelector('.cookie__btn')
  cookieBtn.addEventListener('click', () => {
    setCookie('cookieAlert', 'true', {secure: true, 'max-age': 360000});
      cookieAlert.classList.remove('cookie_active')
  })
  if(getCookie('cookieAlert') == "true")
  {
    cookieAlert.classList.remove('cookie_active')
    cookieAlert.style.display = 'none'
  }
  else
  {
    cookieAlert.classList.add('cookie_active')
  }
}


let districtAchievements = document.querySelector('.district__achievements-list')

if(districtAchievements != undefined)
{
  let dA = new Swiper('.district__achievements-list', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    cssMode: true,
    breakpoints: {
    1014: {
      spaceBetween: 40,
    },
    744:
    {
      cssMode: false,
    }
  }
  })
  window.addEventListener("resize", () => {
    setTimeout(() => {
              dA.destroy();
              dA = new Swiper('.district__achievements-list', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                cssMode: true,
                breakpoints: {
                1014: {
                  spaceBetween: 40,
                },
                744:
                {
                  cssMode: false,
                }
              }
              })
        },10)
  });
}


const submitApplication = new HystModal({linkAttributeName: "data-hystmodal",});



  let lastEventsSwiper = new Swiper('.last-events__swiper', {
    slidesPerView: 'auto',
    cssMode: true,
    breakpoints: {
      744:
      {
        cssMode: false,
      }
  }
  })

  window.addEventListener("resize", () => {
    setTimeout(() => {
              lastEventsSwiper.destroy();
              lastEventsSwiper = new Swiper('.last-events__swiper', {
                slidesPerView: 'auto',
                cssMode: true,
                breakpoints: {
                  744:
                  {
                    cssMode: false,
                  }
              }
              })
        },10)
  });

  let sls = document.querySelector('.strategy-list__swiper')
  if(sls != undefined)
  {
    let strategyListSwiper = new Swiper('.strategy-list__swiper', {
      direction: "horizontal",
      centeredSlides: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,
      cssMode: true,
      breakpoints: {
      1014: {
        direction: "vertical",
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 40,
        loop: false,
      },
        744:
        {
          cssMode: false,
        }
    }
    })

    window.addEventListener("resize", () => {
      setTimeout(() => {
                strategyListSwiper.destroy();
                strategyListSwiper = new Swiper('.strategy-list__swiper', {
                  direction: "horizontal",
                  centeredSlides: false,
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  loop: false,
                  cssMode: true,
                  breakpoints: {
                  1014: {
                    direction: "vertical",
                    centeredSlides: true,
                    slidesPerView: 3,
                    spaceBetween: 40,
                    loop: false,
                  },
                    744:
                    {
                      cssMode: false,
                    }
                }
                })
          },10)
    });

    let next = sls.querySelector('.strategy-list__btn-next')
    let prev = sls.querySelector('.strategy-list__btn-prev')
    next.addEventListener('click',() => {
      strategyListSwiper.slideNext();
    })
    prev.addEventListener('click',() => {
      strategyListSwiper.slidePrev();
    })
  }


  let blogSwipers = document.querySelectorAll('.blog__item-images')
  blogSwipers.forEach((item, i) => {
    let slider = new Swiper(item.querySelector('.blogSwiper'), {
      centeredSlides: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      cssMode: true,
      pagination: {
        el: ".blogSwiper-pagination",
      },
      breakpoints: {
        744:
        {
          cssMode: false,
        }
    }
    })
    window.addEventListener("resize", () => {
      setTimeout(() => {
                slider.destroy();
                slider = new Swiper(item.querySelector('.blogSwiper'), {
                  centeredSlides: false,
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  loop: true,
                  cssMode: true,
                  pagination: {
                    el: ".blogSwiper-pagination",
                  },
                  breakpoints: {
                    744:
                    {
                      cssMode: false,
                    }
                }
                })
          },10)
    });
    let next = item.querySelector('.blogSwiper-buttons-next')
    let prev = item.querySelector('.blogSwiper-buttons-prev')
    next.addEventListener('click',() => {
      slider.slidePrev();
    })
    prev.addEventListener('click',() => {
      slider.slideNext();
    })
  });

  let dropDown = document.querySelectorAll('.drop-down-menu')
  dropDown.forEach((item, i) => {
    let outside = item.querySelector('.drop-down-menu__outside')
    if(outside != undefined)
    {
      outside.addEventListener('click',() => {

        item.classList.toggle('drop-down-menu_active')
      })
    }
  });


let search = document.querySelector('.header__search')
let headeRight = document.querySelector('.header__right')
let searchIcon = search.querySelector('.header__search-icon')
 searchIcon.addEventListener('click', () => {
  headeRight.classList.toggle('header__search_active')
})
let mobileMenu = document.querySelector('.header__mobile')
let menuBtn = document.querySelector('.header__mobile-btn')
// header.classList.add('header_mobileMenuOpened')
// mobileMenu.classList.add('header__mobile_active')
menuBtn.addEventListener('click', () => {
  header.classList.toggle('header_mobileMenuOpened')
  mobileMenu.classList.toggle('header__mobile_active')
})

})

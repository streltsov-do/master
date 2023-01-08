let slider_assets= [
    "images/s2_i1.png",
    "images/s2_i2.png",
    "images/s2_i3.png",
]

// "url(../images/s2_i1.png)",
// "url(../images/s2_i2.png)",
// "url(../images/s2_i3.png)",
///////////////////////////////////////////////////////////////////
let s2_dot_0 = document.querySelector(".s2_btn_dot_0");
let s2_dot_1 = document.querySelector(".s2_btn_dot_1");
let s2_dot_2 = document.querySelector(".s2_btn_dot_2");

let slider_dots= [
    s2_dot_0,
    s2_dot_1,
    s2_dot_2,
]
///////////////////////////////////////////////////////////////////
let s2_desc_0 = document.querySelector(".s2_btn_desc_0");
let s2_desc_1 = document.querySelector(".s2_btn_desc_1");
let s2_desc_2 = document.querySelector(".s2_btn_desc_2");

let slider_desc= [
    s2_desc_0,
    s2_desc_1,
    s2_desc_2,
]
///////////////////////////////////////////////////////////////////
let s2_slide        = document.querySelector(".s2_slider");

let s2_slide_next = document.querySelector(".s2_btn_arrow_next");
let s2_slide_prev = document.querySelector(".s2_btn_arrow_prev");
///////////////////////////////////////////////////////////////////
let s2_slide_mobile = document.querySelector(".s2_hidden_prj_nav");

let s2_slide_mobile_next = document.querySelector(".s2_hidden_btn_next");
let s2_slide_mobile_prev = document.querySelector(".s2_hidden_btn_prev");
///////////////////////////////////////////////////////////////////
let idx=0;
let len=slider_assets.length;

function slider(next) {
    slider_dots[idx].innerHTML = '<img class="s2_dot">';
    slider_desc[idx].classList.remove('s2_btn_desc_selected');

    if (next) {
        if ((idx+1)==len) {
            idx = 0;
        } else {
            idx++;
        }
    } else {
        if ((idx-1)<0) {
            idx = len-1;
        } else {
            idx--;
        }
    }
    // console.log("idx",idx);

    s2_slide.style.setProperty("background-image",`url(${slider_assets[idx]})`);
    slider_dots[idx].innerHTML = '<img class="s2_dot s2_dot_selected">';
    slider_desc[idx].classList.add('s2_btn_desc_selected');
    s2_slide_mobile.style.setProperty("background-image",`url(${slider_assets[idx]})`);
}


function slider_i(i) {
    slider_dots[idx].innerHTML = '<img class="s2_dot">';
    slider_desc[idx].classList.remove('s2_btn_desc_selected');

    idx=i;
    s2_slide.style.setProperty("background-image",`url(${slider_assets[idx]})`);
    s2_slide_mobile.style.setProperty("background-image",`url(${slider_assets[idx]})`);
    
    slider_dots[idx].innerHTML = '<img class="s2_dot s2_dot_selected">';
    slider_desc[idx].classList.add('s2_btn_desc_selected');
}
///////////////////////////////////////////////////////////////////
s2_slide_mobile_next.addEventListener("click", () => { 
    slider(true,0)
});

s2_slide_mobile_prev.addEventListener("click", () => { 
    slider(false,0)
});
///////////////////////////////////////////////////////////////////
s2_slide_next.addEventListener("click", () => { 
    slider(true)
});

s2_slide_prev.addEventListener("click", () => { 
    slider(false)
});
///////////////////////////////////////////////////////////////////
s2_dot_0.addEventListener("click", () => { 
    slider_i(0)
});
s2_dot_1.addEventListener("click", () => { 
    slider_i(1)
});
s2_dot_2.addEventListener("click", () => { 
    slider_i(2)
});

s2_desc_0.addEventListener("click", () => { 
    slider_i(0)
});
s2_desc_1.addEventListener("click", () => { 
    slider_i(1)
});
s2_desc_2.addEventListener("click", () => { 
    slider_i(2)
});
///////////////////////////////////////////////////////////////////
let s2_btn_dot_0    = document.querySelector(".s2_btn_dot_0");
let s2_btn_dot_1    = document.querySelector(".s2_btn_dot_1");
let s2_btn_dot_2    = document.querySelector(".s2_btn_dot_2");
///////////////////////////////////////////////////////////////////
let s2_btn_dsc_0    = document.querySelector(".s2_btn_desc_0");
let s2_btn_dsc_1    = document.querySelector(".s2_btn_desc_1");
let s2_btn_dsc_2    = document.querySelector(".s2_btn_desc_2");
///////////////////////////////////////////////////////////////////
let s2_h_city       = document.querySelector(".s2_heads_city");
let s2_h_area       = document.querySelector(".s2_heads_area");
let s2_h_time       = document.querySelector(".s2_heads_time");
///////////////////////////////////////////////////////////////////
let slider_assets= [
    {
        img:    "images/s2_i1.png",
        b_dot:  s2_btn_dot_0,
        b_dsc:  s2_btn_dsc_0,
        h_txt:  "Rostov-on-Don LCD Admiral",
        h_city: "Rostov-on-Don </br> LCD Admiral",
        h_area: "81 m2",
        h_time: "3.5 months",
    },
    {
        img:    "images/s2_i2.png",
        b_dot:  s2_btn_dot_1,
        b_dsc:  s2_btn_dsc_1,
        txt:    "Sochi Thieves",
        h_city: "Sochi </br> Thieves",
        h_area: "105 m2",
        h_time: "4 months",
    },
    {
        img:    "images/s2_i3.png",
        b_dot:  s2_btn_dot_2,
        b_dsc:  s2_btn_dsc_2,
        txt:    "Rostov-on-Don Patriotic",
        h_city: "Rostov-on-Don </br> Patriotic",
        h_area: "93 m2",
        h_time: "3 months",

    },
]
///////////////////////////////////////////////////////////////////
let s2_slide        = document.querySelector(".s2_slider");

let s2_slide_next = document.querySelector(".s2_btn_arrow_next");
let s2_slide_prev = document.querySelector(".s2_btn_arrow_prev");
///////////////////////////////////////////////////////////////////
let s2_slide_mobile = document.querySelector(".s2_hidden_slider");

let s2_slide_mobile_next = document.querySelector(".s2_hidden_btn_next");
let s2_slide_mobile_prev = document.querySelector(".s2_hidden_btn_prev");
///////////////////////////////////////////////////////////////////
let idx=0;
let len=slider_assets.length;

function slider(next) {
    slider_assets[idx].b_dot.innerHTML = '<img class="s2_dot">';
    slider_assets[idx].b_dsc.classList.remove('s2_btn_desc_selected');

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

    slider_assets[idx].b_dot.innerHTML = '<img class="s2_dot s2_dot_selected">';
    slider_assets[idx].b_dsc.classList.add('s2_btn_desc_selected');
    s2_slide.innerHTML = `<img class="s2_slider_img" src="${slider_assets[idx].img}" alt="${slider_assets[idx].txt}"> <img>`;
    s2_slide_mobile.innerHTML = `<img class="s2_slider_img_mobile" src="${slider_assets[idx].img}" alt="${slider_assets[idx].txt}"> <img>`;
    s2_h_city.innerHTML = slider_assets[idx].h_city;
    s2_h_area.innerHTML = slider_assets[idx].h_area;
    s2_h_time.innerHTML = slider_assets[idx].h_time;
}


function slider_i(i) {
    slider_assets[idx].b_dot.innerHTML = '<img class="s2_dot">';
    slider_assets[idx].b_dsc.classList.remove('s2_btn_desc_selected');

    idx=i;
    
    slider_assets[idx].b_dot.innerHTML = '<img class="s2_dot s2_dot_selected">';
    slider_assets[idx].b_dsc.classList.add('s2_btn_desc_selected');
    s2_slide.innerHTML = `<img class="s2_slider_img" src="${slider_assets[idx].img}" alt="${slider_assets[idx].txt}"> <img>`;
    s2_slide_mobile.innerHTML = `<img class="s2_slider_img_mobile" src="${slider_assets[idx].img}" alt="${slider_assets[idx].txt}"> <img>`;
    s2_h_city.innerHTML = slider_assets[idx].h_city;
    s2_h_area.innerHTML = slider_assets[idx].h_area;
    s2_h_time.innerHTML = slider_assets[idx].h_time;
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
s2_btn_dot_0.addEventListener("click", () => { 
    slider_i(0)
});
s2_btn_dot_1.addEventListener("click", () => { 
    slider_i(1)
});
s2_btn_dot_2.addEventListener("click", () => { 
    slider_i(2)
});

s2_btn_dsc_0.addEventListener("click", () => { 
    slider_i(0)
});
s2_btn_dsc_1.addEventListener("click", () => { 
    slider_i(1)
});
s2_btn_dsc_2.addEventListener("click", () => { 
    slider_i(2)
});
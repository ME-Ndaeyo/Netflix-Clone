const a = document.querySelector("#p1"), b = document.querySelector("#p2"), c = document.querySelector("#p3"), 
d = document.querySelector("#p4"), e = document.querySelector("#p5"),f = document.querySelector("#p6")

let list = [a, b, c, d, e, f]

function faqsList_a(){
    
  if (a.style.display == "none"){
        a.style.display = "block", c.style.display = "none", b.style.display = "none", 
        d.style.display = "none", e.style.display = "none",f .style.display = "none" 
    } else {
        a.style.display = "none", b.style.display = "none", c.style.display = "none" 
        d.style.display = "none", e.style.display = "none", f.style.display = "none"
  }
}

function faqsList_b(){
    
  if (b.style.display == "none"){
        b.style.display = "block", a.style.display = "none", c.style.display = "none" 
        d.style.display = "none", e.style.display = "none", f.style.display = "none" 
    } else {
        a.style.display = "none", b.style.display = "none", c.style.display = "none" 
        d.style.display = "none", e.style.display = "none", f.style.display = "none"
  }
}

function faqsList_c(){
    
  if (c.style.display == "none"){
        c.style.display = "block"
        a.style.display = "none" 
        b.style.display = "none" 
        d.style.display = "none" 
        e.style.display = "none" 
        f.style.display = "none" 
    } else {
        a.style.display = "none"
        b.style.display = "none" 
        c.style.display = "none" 
        d.style.display = "none" 
        e.style.display = "none" 
        f.style.display = "none"
  }
}

function faqsList_d(){
    
  if (d.style.display == "none"){
        d.style.display = "block"
        a.style.display = "none" 
        b.style.display = "none" 
        c.style.display = "none" 
        e.style.display = "none" 
        f.style.display = "none" 
  } else {
        a.style.display = "none"
        b.style.display = "none" 
        c.style.display = "none" 
        d.style.display = "none" 
        e.style.display = "none" 
        f.style.display = "none"
  }
}

function faqsList_e(){
    
  if (e.style.display == "none"){
        e.style.display = "block"
        a.style.display = "none" 
        b.style.display = "none" 
        d.style.display = "none" 
        c.style.display = "none" 
        f.style.display = "none" 
  } else {
        a.style.display = "none"
        b.style.display = "none" 
        c.style.display = "none" 
        d.style.display = "none" 
        e.style.display = "none" 
        f.style.display = "none"
  }
}

function faqsList_f(){
    
  if (f.style.display == "none"){
        f.style.display = "block"
        a.style.display = "none" 
        b.style.display = "none" 
        d.style.display = "none" 
        e.style.display = "none" 
        c.style.display = "none" 
  } else {
        a.style.display = "none"
        b.style.display = "none" 
        c.style.display = "none" 
        d.style.display = "none" 
        e.style.display = "none" 
        f.style.display = "none"
  }
}
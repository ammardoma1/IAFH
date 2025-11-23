
(function(){
  const root=document.documentElement;
  const stored=localStorage.getItem('theme')||'light';
  root.setAttribute('data-theme',stored);
  document.querySelectorAll('[data-toggle="theme"]').forEach(b=>{
    b.textContent=(stored==='dark'?'Light mode':'Dark mode');
    b.addEventListener('click',()=>{
      const curr=root.getAttribute('data-theme'); const next=(curr==='dark'?'light':'dark');
      root.setAttribute('data-theme',next); localStorage.setItem('theme',next);
      document.querySelectorAll('[data-toggle="theme"]').forEach(x=>x.textContent=(next==='dark'?'Light mode':'Dark mode'));
    });
  });
  const q=new URLSearchParams(location.search);
  let lang=q.get('lang')||localStorage.getItem('lang')||'ar';
  function apply(l){document.documentElement.dir=(l==='ar'?'rtl':'ltr');
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n'); const dict=window.I18N&&window.I18N[k]; if(dict&&dict[l]) el.innerHTML=dict[l];});
    document.querySelectorAll('.lang-switch button').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===l));
    localStorage.setItem('lang',l);
  }
  document.querySelectorAll('.lang-switch button').forEach(btn=>btn.addEventListener('click',()=>apply(btn.dataset.lang)));
  apply(lang);
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.getAttribute('href').endsWith(path)) a.classList.add('btn-primary');});
})();
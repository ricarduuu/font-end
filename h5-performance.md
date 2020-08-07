## h5性能监控参数涉及


    wbTotal（webview加载H5页面时间）
    wbInit（webview初始化时间）
    wbResponse（webView初始化加载url到第一次webView start回调时间）
    loadPageComplete（页面所有资源加载完成时间）
    renderPage（用户基本可以看到基础页面的时间）
    domReady（解析DOM树结构的时间），ttfb（用户拿到Html5页面第一个资源）
    pageRequest（请求h5页面文档所需的时间）
    ttfb（用户拿到Html5页面第一个资源）
    netType(网络类型)
    内存信息（performance.memory）
    jsHeapSizeLimit: 内存大小限制

    totalJSHeapSize: 可使用的内存

    usedJSHeapSize: JS对象(包括V8引擎内部对象)占用的内存，不能大于totalJSHeapSize，如果大于，有可能出现了内存泄漏

##  performance参数
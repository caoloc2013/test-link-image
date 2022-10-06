console.log(Push)
Push.create("Hello world!", {
    body: "How's it hangin'?",
    icon: window.location.origin+'/logo.svg',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
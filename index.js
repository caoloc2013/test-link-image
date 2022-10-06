console.log(window.location.origin+'/logo.svg')
const test =window.location.origin+'/logo.svg'
Push.create("Hello world!", {
    body: "How's it hangin'?",
    icon: test,
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
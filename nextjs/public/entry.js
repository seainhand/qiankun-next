// eslint-disable-next-line import/unambiguous
const render = () => Promise.resolve();

(global => {
    global.home = {
        bootstrap() {
            console.log('home bootstrap');
            return Promise.resolve();
        },
        mount() {
            console.log('home mount');
            // return render($);
        },
        unmount() {
            console.log('home unmount');
            return Promise.resolve();
        }
    };
})(window);

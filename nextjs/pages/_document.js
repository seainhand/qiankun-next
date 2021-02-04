import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <style dangerouslySetInnerHTML={{__html: this.props.css}} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script src="/entry.js" entry></script>
            </html>
        );
    }
}

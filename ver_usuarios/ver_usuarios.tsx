import styles from './styles.module.css'

export default function Home() {
    const callAPI = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer kgsbmgrejbj*sgnmsndfgd!gsgnsqwzxcvbvbvdwsdplmnbvsdh");
        myHeaders.append("Cookie", "tenan=CCC");

        var formdata = new FormData();


        const response = await fetch("https://forms.s.dev.kru360.com/api/v1/lead?form=forojoventu&", {
            method: 'GET',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        });
        const data = await response.json()
        console.log(data)

    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button onClick={callAPI}>Make API Call</button>
            </main>
        </div>
    );
}
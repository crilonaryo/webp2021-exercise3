import { useEffect, useState } from "react";
import { fetchImages } from "./Api";

function Header() {
    return (
        
      <header className="hero is-small is-link">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered">ドーベルマン写真館<br></br>
            <br></br>
            <p className="subtitle">日本大学文理学部情報科学科 Webプログラミング演習課題 5419025竹内亮太朗</p></h1>
          <br></br>
          
        </div>
        <a id="move"></a>

        </div>
          <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active pr-1">
            <a href="#move2"><p className="">利用方法</p></a>
          </li>
          <li class="is-active pr-1">
            <a href="#move3">ドーベルマンについて</a>
          </li>
          <li class="is-active pr-1">
            <a href="#move4">当サイトについて</a>
          </li>
         
        </ul>
      </div>
    </nav>
  </div>
      </header>
    );
  }

  function Loading() {
    return <p>ロード中...</p>;
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
          <img src={props.src} alt="Doberman" />
          </figure>
        </div>
      </div>
    );
  }
  
  function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
      return <Loading />;
    }
    return (
      <div className="columns is-vcentered is-multiline">
       {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
      </div>
    );
  }
  
  function Form(props) {
    function handleSubmit(event) {
      event.preventDefault();
      const { breed } = event.target.elements;
      props.onFormSubmit(breed.value);
    }

    return (
          <form onSubmit={handleSubmit}>
                <button name="breed" type="submit" className="button is-large is-fullwidth is-link is-rounded">
                  ドーベルマンの写真を変更する
                </button>
          </form>
    );
  }

  function Main() {
    const [urls, setUrls] = useState(null);

    useEffect(() => {
      fetchImages().then((urls) => {
        setUrls(urls);
      });
    }, []);

    function reloadImages() {
        fetchImages().then((urls) => {
          setUrls(urls);
        });
      }
      return (
        <main className="has-background-grey-lighter">
           <section className="section">
          <div className="container">
          <Form onFormSubmit={reloadImages} />
          </div>
        </section>
          <section className="section">
            <div className="container">
            <Gallery urls={urls} />
            </div>
          </section>

          <a id="move3"></a>
          <a className="is-underlined has-text-link" href="#move">上部へ戻る</a>
          <p>&nbsp;</p>
          <br></br><br></br>
          
          
        <h1 className="title is-size-1">ドーベルマン</h1>
         <p className="is-size-4">19世紀末、ドイツのテューリンゲン州に住んでいたブリーダー、カール・フリードリヒ・ルイス・ドーベルマン
             によって警備犬としてジャーマン・シェパード・ドッグとジャーマン・ピンシャー、ロットワイラー、マンチェスター・テリア
             との交配により生み出された。体毛は極短い。体は細身だが全体的に筋肉質で敏捷性、走力に優れる。その優美な筋肉質のスタイルから
             「犬のサラブレッド」とも呼ばれる。労働犬・警備犬として品種改良した犬種であるので、難しい訓練にも耐えられる非常に頭の良い犬である。
             飼い主に対しては非常に従順であり、強い忠誠心と忍耐力を持つが、家族以外の人間、他の犬に対しては警戒心が極めて強く、
             縄張り意識も高い為攻撃的になり易い側面を持つ。その容姿から怖い印象を持たれがちだが、実際は穏やかで友好的な性格で賢く、洞察力も優れている。<br></br><br></br>
             <p className="has-text-weight-bold">原産地:&nbsp;ドイツ</p>
             <p className="has-text-weight-bold">体重:&nbsp;オス・40~45 kg (88~99 lb)/メス・32~35 kg (71~77 lb)</p>
             <p className="has-text-weight-bold">体高:&nbsp;オス・68~72 cm (27~28 in)/メス・63~68 cm (25~27 in)</p>
             <p className="has-text-weight-bold">外被:&nbsp;短毛</p>
             <p className="has-text-weight-bold">毛色:&nbsp;黒, 赤, 青, 子鹿色</p>
             <p className="has-text-weight-bold">寿命:&nbsp;9~12 年</p>
             

             <br></br>
             <a className="is-underlined" href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%BC%E3%83%99%E3%83%AB%E3%83%9E%E3%83%B3">Wikipediaより引用</a>
    </p>
    <a id="move2"></a>
    <br></br><br></br>
    <br></br><br></br>

    <h1 className="title is-size-1">利用方法</h1>
    <p className="is-size-4">
        当サイトにアクセスすると、ドーベルマンの写真が60枚表示されます。他の写真も見たい場合は、
        「ドーベルマンの写真を変更する」ボタンをクリックしてください。ランダムに写真が入れ変わります。
        写真の保存等の著作権等に関しては、一切の責任を負いかねます。詳細はページ下部の、DogAPIサイトリンク
        よりご確認ください。
             <br></br>
             
    </p>
    <br></br><br></br>
    <br></br><br></br>

        </main>
      );

      
    }
   
  function Footer() {
    return (
      <footer className="footer hero is-medium is-link">
          <div class="content is-normal">
          <a className="is-underlined has-text-light" href="#move">上部へ戻る</a>
          <br></br><br></br>
          <br></br><br></br>

         

</div>
        <div class="content is-normal has-text-centered">
        <br></br>
        <a id="move4"></a>
        <h2 className="has-text-black">当サイトについて</h2>
        <p>60枚のドーベルマンのお写真をご覧になれます。合計約2000枚から、画像がピックされます。<br></br><br></br>
            動画が見たい方は下記より。<br></br>
        <a className="is-underlined has-text-light" href="https://www.youtube.com/results?search_query=%E3%83%89%E3%83%BC%E3%83%99%E3%83%AB%E3%83%9E%E3%83%B3">ドーベルマンの動画(YouTubeより)</a>
        </p>
          <p>こちらのサイトでは、Dogs APIを利用しています。</p>
          <p>
            <a className="is-underlined has-text-light" href="https://dog.ceo/dog-api/documentation/">"Dogs API" 取得はこちら</a>
          </p>
          <br></br><br></br>
          <p>※日本大学文理学部情報科学科のWebプログラミング演習課題であることをご承知ください。</p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;
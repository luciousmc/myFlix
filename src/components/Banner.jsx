import React from 'react';
import './Banner.css';

function Banner() {

  const truncate = (string, n) => {
    if(!string) return;

    if (string.length > n) {
      const newStr = string.substr(0, n - 1) + '...';
      return newStr;
    }
    return string;
  }



  return (
    <section
      className='banner'
      style={{
        backgorundSize: 'cover',
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: 'center center'
      }}
    >
      
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>

        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur voluptatem magni at assumenda ratione quae. Ducimus necessitatibus culpa excepturi amet, ex est maxime laudantium totam tempore exercitationem labore cumque animi ut dolorem laborum provident. Modi labore sed omnis illum, quam, id quisquam eos doloribus facilis, necessitatibus porro. Neque provident nobis soluta dolorum voluptatem inventore. Numquam minus totam exercitationem reprehenderit dolorum nobis nisi maiores perferendis voluptatem, sunt at omnis consectetur error labore quas, autem doloribus nostrum quod praesentium cumque animi eos ad! Amet assumenda suscipit nam? Beatae nesciunt, mollitia dolores error animi illum commodi odit obcaecati recusandae eos autem adipisci aspernatur? A repudiandae vitae porro rerum nam labore aliquid recusandae inventore ad ipsa? Non eius officiis dolor unde cum iste eligendi assumenda hic temporibus tenetur ut mollitia ipsum quod et eum, recusandae, laboriosam esse doloribus expedita voluptatem repellat. Provident nam esse quo ipsa, aliquam possimus nobis animi voluptatem doloremque dolor suscipit eum sequi quia quaerat enim nemo totam voluptas quidem odit ab. Dicta, soluta corrupti libero porro quos facilis animi qui sit iusto quisquam dolores, quaerat accusamus mollitia in consequuntur facere, laboriosam quis? Rerum consequatur temporibus nobis vitae, libero sint, voluptate veritatis repellat corrupti doloribus odio tempora debitis iusto!`, 150)}
        </h1>

      </div>
      <div className="banner--fadeBottom" />

    </section>
  )
}

export default Banner;

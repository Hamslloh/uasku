import Layout from '../layouts/layout';

  const Porfile = () => (
    <Layout>
        <h1 className="title">Profil Saya</h1>
        <div className="box">
            <article className="media">

                <div className="media-left">
                    <figure className="image is-64x64">
                        <img className="is-rounded" src="" alt="hamdali"/>
                    </figure>
                </div>

                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Hamdali Dikirulloh</strong>
                            <small>@hamdali</small>
                            <br />
                            Saya adalah seorang mahasiswa di kampus STIKOM PGRI Banyuwangi
                            yang sedang menempuh matakuliah Pemograman Web.  Materi yang sedang
                            saya pelajari adalah NextJS
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </Layout>
  )

  export default Porfile;
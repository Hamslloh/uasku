import React, {Component} from 'react';
import Menu from '../../components/Menu';
import Layout from '../../layouts/layout';
import Link from 'next/link';


class proyek extends Component{
    render(){
        return(
            <Layout>
                <h1 clasname="title">Proyek</h1>
                <p>Berikut adalah daftar proyek yang saya kerjakan</p>
            <ul>
                <li><Link href="/profile/web-app"><a>Web App</a></Link></li>
                <li><Link href="/proyek/mobile-app"><a>Mobile App</a></Link></li>
            </ul>
            </Layout>
        );
    }
}

export default proyek;
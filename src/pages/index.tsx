import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// --- 새로운 헤더 컴포넌트 ---
function NewHomepageHeader() {
    return (
        <header className={styles.heroSection}>
            <div className={styles.heroLeftColumn}>
                <h1 className={styles.heroTitle}>철학과 컴퓨터 공학</h1>
                <p className={styles.heroDescription}>
                    철학과 컴퓨터 공학에 대한 글을 기록하고 공유하는 개인 웹사이트입니다. Docusaurus를 활용하여 구축했으며,<br></br>기록 및 포트폴리오를 위해 만들어졌습니다.
                </p>
                <div className={styles.heroCategoryContainer}>
                    <Link className={styles.heroCategoryLink} to="/docs/category/tutorial---basics">
                        Philosophy
                    </Link>
                    <Link className={styles.heroCategoryLink} to="/docs/category/tutorial---extras">
                        Computer-engineering
                    </Link>
                </div>
            </div>
            <div className={styles.heroRightColumn}>
                {/* --- 이미지 경로를 수정했습니다 --- */}
                <img 
                    src="./img/hero-art.jpg" 
                    alt="An abstract illustration of a brain, computer circuits, and question marks" 
                    className={styles.heroImage}
                />
            </div>
        </header>
    );
}

// --- 메인 페이지 컴포넌트 ---
export default function Home(): JSX.Element {
    return (
        <Layout title="Home" description="Kim-Do-Gyun's Tech Blog">
            <NewHomepageHeader />
            <main />
        </Layout>
    );
}

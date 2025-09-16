import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// --- 카드에 표시될 내용 ---
const mainNavItems = [
  {
    title: 'Philosophy',
    description: '철학에 대해 학습한 내용을 정리합니다.',
    link: '/philosophy/intro',
  },
  {
    title: 'Computer',
    description: '컴퓨터 공학 관련 지식을 기록합니다.',
    link: '/computer/intro',
  },
  {
    title: 'Blog',
    description: '일상적인 생각이나 경험을 공유합니다.',
    link: '/blog',
  },
];

// 카드 컴포넌트
function Card({ title, description, link }: { title: string; description: string; link: string; }) {
  return (
    <div className="col col--4">
      <Link to={link} className={styles.cardLink}>
        <div className={`card ${styles.customCard}`}>
          <div className="card__body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// 홈페이지 메인 컴포넌트
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="철학과 컴퓨터 공학에 대한 글을 기록하고 공유합니다.">
      
      {/* --- 상단 히어로 배너 --- */}
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>

      {/* --- 하단 카드 섹션 --- */}
      <main className={styles.cardSection}>
        <div className="container">
          <div className="row">
            {mainNavItems.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
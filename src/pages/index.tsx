import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// ============== 1. 데이터 및 타입 정의 영역 ==============
// 이 부분의 내용을 수정하여 페이지를 채워보세요.

// --- 자기소개 데이터 ---
const aboutMeData = {
  name: '김도균',
  title: 'Backend Developer',
  description: '새로운 기술을 배우고 적용하는 것을 즐기는 백엔드 개발자입니다. 확장 가능하고 유지보수가 용이한 코드를 작성하기 위해 항상 고민합니다. 현재는 클라우드 네이티브 환경과 MSA(Microservice Architecture)에 큰 관심을 가지고 있습니다.',
  // 여기에 본인의 프로필 사진 URL을 넣어주세요.
  imageUrl: 'https://placehold.co/400x400/EFEFEF/333?text=Profile',
};

// --- 주요 콘텐츠(프로젝트 또는 블로그 글) 데이터 ---
type FeaturedItem = {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link: string; // 클릭 시 이동할 경로 (예: /docs/my-project)
};

const featuredItems: FeaturedItem[] = [
  {
    title: '프로젝트 A: E-commerce Platform',
    category: 'PROJECT',
    imageUrl: 'https://placehold.co/600x400/FAFAFA/333?text=Project+A',
    description: 'Spring Boot와 JPA를 사용하여 구축한 전자상거래 플랫폼입니다. Docker를 이용해 배포 자동화 환경을 구축했습니다.',
    link: '/docs/intro',
  },
  {
    title: '알고리즘 문제 풀이: Dynamic Programming',
    category: 'ALGORITHM',
    imageUrl: 'https://placehold.co/600x400/FAFAFA/333?text=Algorithm',
    description: '동적 계획법의 핵심 원리를 정리하고, 관련 백준 문제들을 풀이한 기록입니다.',
    link: '/docs/intro',
  },
  {
    title: 'MSA에 대한 고찰',
    category: 'TECH ESSAY',
    imageUrl: 'https://placehold.co/600x400/FAFAFA/333?text=Tech+Essay',
    description: '마이크로서비스 아키텍처의 장단점과 실제 도입 시 고려해야 할 점들을 정리했습니다.',
    link: '/docs/intro',
  },
   {
    title: 'Redis를 활용한 실시간 랭킹 시스템',
    category: 'PROJECT',
    imageUrl: 'https://placehold.co/600x400/FAFAFA/333?text=Project+B',
    description: 'Redis의 Sorted Set을 활용하여 실시간으로 사용자 랭킹을 집계하고 보여주는 시스템을 구현한 경험입니다.',
    link: '/docs/intro',
  },
];


// ============== 2. 컴포넌트 영역 ==============

// --- 히어로 섹션 (페이지 최상단) ---
function HeroSection(): JSX.Element {
  return (
    <div className={clsx('hero', styles.heroSection)}>
      <div className="container">
        <h1 className={styles.heroTitle}>Developer Portfolio</h1>
        <p className={styles.heroSubtitle}>배움과 성장을 기록하고 공유하는 공간입니다.</p>
        <Link className={clsx('button button--primary button--lg', styles.heroButton)} to="/docs/intro">
          학습 기록 보러가기 &rarr;
        </Link>
      </div>
    </div>
  );
}

// --- 자기소개 섹션 ---
function AboutMeSection(): JSX.Element {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <img src={aboutMeData.imageUrl} alt={aboutMeData.name} className={styles.aboutImage} />
          </div>
          <div className="col col--8">
            <h2 className={styles.aboutName}>{aboutMeData.name}</h2>
            <p className={styles.aboutTitle}>{aboutMeData.title}</p>
            <p className={styles.aboutDescription}>{aboutMeData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 주요 콘텐츠 카드 ---
function FeatureCard({item}: {item: FeaturedItem}): JSX.Element {
  return (
    <div className={clsx('col col--6', styles.featureCardWrapper)}>
        <div className={styles.featureCard}>
            <Link to={item.link} className={styles.cardLink}>
                <div className={styles.cardImageContainer}>
                    <img src={item.imageUrl} alt={item.title} className={styles.cardImage} />
                </div>
                <div className={styles.cardBody}>
                    <p className={styles.cardCategory}>{item.category}</p>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                </div>
            </Link>
        </div>
    </div>
  );
}

// --- 주요 콘텐츠 섹션 ---
function FeaturedContentSection(): JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          {featuredItems.map((item, idx) => (
            <FeatureCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}


// ============== 3. 최종 페이지 렌더링 ==============
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Portfolio`}
      description="Backend Developer Kim-Do-Gyun's Portfolio and Tech Blog">
      <main>
        <HeroSection />
        <FeaturedContentSection />
        <AboutMeSection />
      </main>
    </Layout>
  );
}

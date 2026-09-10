import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FeatureCard from '../components/FeatureCard';


const featuresData = [
  {
    description: 'Entenda sobre o que é IA, quais os tipos e como usar no dia a dia os principais modelos do mercado',
    buttonText: 'Entendendo a IA',
    destination: '/docs/entendendo-ia/',
  },
  {
    description: 'Fique por dentro da legislação e normativas acerca do uso de IA',
    buttonText: 'Lei & Diretrizes',
    destination: '/docs/legislacao/',
  },
  {
    description: 'Utilize prompts estruturados e faça automatizações',
    buttonText: 'Prompts & usos',
    destination: '/docs/prompts/',
  },
  {
    description: 'Principais dúvidas sobre a RAG',
    buttonText: 'RAG',
    destination: '/docs/rag/',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guia e recursos sobre Inteligência Artificial para professores">
      <main>
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-image-col">
              <img src={useBaseUrl('/img/pc.png')} alt="Notebook"/>
              <h1 className="hero-notebook-title">IA NA DOCÊNCIA</h1>
            </div>
            <div className="hero-text-col">
              <h2>Entenda como funciona e<br/>tudo que ela pode fazer</h2>
              <Link className="button button--primary button--lg hero-btn" to="/docs/entendendo-ia/">
                Começar
              </Link>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container features-grid">
            {featuresData.map((props, idx) => (
              <FeatureCard key={idx} {...props} />
            ))}
          </div>
        </section>

        <section className="rag-section">
          <div className="container">
            <h3 className="rag-title">ASSISTENTE VIRTUAL ESPECIALISTA NA SUA DISCIPLINA</h3>
            <div className="rag-content">
              <div className="rag-logo">
                <p className="rag-text-logo">RAG</p>
              </div>
              <div className="rag-info">
                <ul>
                  <li>Garante respostas baseadas <strong>estritamente</strong> na bibliografia que você escolher enviar</li>
                  <li>Cita o livro, autor ou documento <strong>exato</strong> de onde tirou cada resposta</li>
                </ul>
                <div className="rag-buttons">
                  <Link className="button button--primary rag-btn" to="/docs/rag/">Saiba mais</Link>
                  <Link className="button button--primary rag-btn" to="/">Registrar</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

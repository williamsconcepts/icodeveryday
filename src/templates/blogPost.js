import React from 'react';
import Layout from './layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BlogAuthor from '../components/blog/BlogAuthor';
import BlogPostPageWrapper from '../styles/blog/BlogPostStyles';

// TODO add next and previous post links

const blogPost = ({ data }) => {
  const {
    title,
    subtitle,
    slug,
    type,
    imageTitle,
    imageAlt,
  } = data.markdownRemark.frontmatter;

  // ? set SEO meta data depending on post type
  let seo;
  if (type === 'blogPost') {
    seo = {
      page: `${type}`,
      title: `${title}`,
      description: `${data.markdownRemark.excerpt}`,
      url: `https://jacobdcastro.com/${slug}`,
      imgUrl: `${data.file.publicURL}`,
      breadcrumbs: [
        {
          name: `Blog`,
          path: `/blog`,
        },
        {
          name: `${title}`,
          path: `/blog/${slug}`,
        },
      ],
    };
  } else if (type === 'tutorial') {
    seo = {
      page: `${type}`,
      title: `${title}`,
      description: `${data.markdownRemark.excerpt}`,
      url: `https://jacobdcastro.com/${slug}`,
      img: `${data.file.publicURL}`,
      breadcrumbs: [
        {
          name: `Tutorials`,
          path: `/tutorials`,
        },
        {
          name: `${title}`,
          path: `/tutorials/${slug}`,
        },
      ],
    };
  }

  return (
    <Layout seo={seo} style={{ textAlign: 'left' }}>
      <BlogPostPageWrapper>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>

        {/* <BlogAuthor /> */}

        <Img
          style={{
            marginBottom: '25px',
          }}
          fluid={data.file.childImageSharp.fluid}
          alt={imageAlt}
          title={imageTitle}
        />

        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </BlogPostPageWrapper>
    </Layout>
  );
};

export default blogPost;

export const BLOG_POST_QUERY = graphql`
  query($slug: String!, $imgUrl: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 370)
      frontmatter {
        type
        title
        slug
        subtitle
        image
        imageTitle
        imageAlt
        date
        tags
      }
    }

    file(relativePath: { eq: $imgUrl }) {
      publicURL # used for SEO
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
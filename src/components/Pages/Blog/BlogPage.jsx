import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Form } from "react-bootstrap";
import { TfiShare } from "react-icons/tfi";
import "./BlogPage.css";

const blogData = [
  {
    id: 1,
    image: "https://ahaansoftware.com/uploadedimage/Banner/HomeBanner.png",
    category: "Art / Lifestyle",
    title: "Fashion Model Shoot",
    date: "July 22, 2015",
    content:
      "Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    author: "John Doe",
  },
  {
    id: 2,
    image: "https://ahaansoftware.com/uploadedimage/Banner/HomeBanner.png",
    category: "Travel / Adventure",
    title: "Exploring the Wild",
    date: "August 10, 2021",
    content:
      "Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    author: "Jane Doe",
  },
  {
    id: 3,
    image: "https://ahaansoftware.com/uploadedimage/Banner/HomeBanner.png",
    category: "Food / Cooking",
    title: "Delicious Recipes to Try",
    date: "September 5, 2023",
    content:
      "Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    author: "Emily Smith",
  },
];

const reactions = [
  { emoji: "❤️", label: "love" },
  { emoji: "😂", label: "haha" },
  { emoji: "😢", label: "sad" },
  { emoji: "😡", label: "angry" },
];

const BlogPage = () => {
  const [selectedReactions, setSelectedReactions] = useState({});
  const [reactionCounts, setReactionCounts] = useState({});
  const [totalReactions, setTotalReactions] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleReaction = (blogId, reaction) => {
    setSelectedReactions({ ...selectedReactions, [blogId]: reaction });

    setReactionCounts((prevCounts) => {
      const newCount = {
        ...prevCounts,
        [blogId]: {
          ...prevCounts[blogId],
          [reaction]: (prevCounts[blogId]?.[reaction] || 0) + 1,
        },
      };

      const total = Object.values(newCount[blogId] || {}).reduce(
        (sum, val) => sum + val,
        0
      );

      setTotalReactions((prevTotal) => ({
        ...prevTotal,
        [blogId]: total,
      }));

      return newCount;
    });
  };

  const handleShare = (blogTitle) => {
    const shareUrl = `${window.location.origin}/blog/${blogTitle.replace(/\s+/g, "-").toLowerCase()}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Blog link copied to clipboard!");
  };

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Search blogs..."
        className="mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row className="blog-grid">
        {filteredBlogs.map((blog) => (
          <Col md={6} lg={4} key={blog.id} className="mb-4">
            <Card className="blog-card">
              <Card.Img variant="top" src={blog.image} className="blog-image" />
              <Card.Body>
                <div className="blog-header">
                  <div>
                    <p className="category">{blog.category}</p>
                    <Card.Title className="blog-title">{blog.title}</Card.Title>
                  </div>
                  <Badge pill bg="warning" className="reaction-badge-blog">
                    Total Reactions {totalReactions[blog.id] || 0}
                  </Badge>
                </div>
                <p className="blog-date">{blog.date}</p>
                <Card.Text className="blog-content">{blog.content}</Card.Text>

                <div className="author-reactions">
                  <p className="blog-author">By {blog.author}</p>
                  <div className="reaction-container">
                    {reactions.map(({ emoji, label }) => (
                      <Button
                        key={label}
                        variant={
                          selectedReactions[blog.id] === label
                            ? "warning"
                            : "outline-secondary"
                        }
                        className="reaction-btn"
                        onClick={() => handleReaction(blog.id, label)}
                      >
                        {emoji} {reactionCounts[blog.id]?.[label] || 0}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="blog-actions d-flex justify-content-between mt-3">
                  <Button variant="primary" className="read-more-btn">
                    Read More
                  </Button>
                  <Button variant="outline-secondary" className="share-btn" onClick={() => handleShare(blog.title)}>
                    <TfiShare />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero-section--content">
                    <p className="section--title">Hey, I'm Ida</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Front-End</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sunt iure accusamus fuga maxime voluptate recusandae dolorem. Ab, molestias quae? Suscipit veniam quibusdam nam delectus molestiae hic officiis cum ducimus.
                    <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quam distinctio tenetur optio, qui veritatis autem exercitationem ut voluptatum alias asperiores, placeat, nesciunt aspernatur ullam tempore ad repudiandae cum quibusdam.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./src/images/ida-modified.png" alt="profile image" />
            </div>
        </section>
    )
}
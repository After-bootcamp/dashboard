import React, { Component } from 'react';
import "../CSS/App.css";


// childComponents
import NavbarInstance from './NavbarInstance';
import Footer from './Footer';

class Intro extends Component {
  render() {
    return (
      <div>
        <NavbarInstance />
        <h2>Welcome to After Bootcamp</h2>

        <p>I went through a programming bootcamp that was 13 weeks long.  Between classwork and homework, we were working for about 60 hours a week.  We would start every Monday thru Friday with either a warm-up challenge or a quick lesson.  After that, we went to a morning lesson.  This lesson went into a lab about what we just learned.  Then came a lunch break.  After lunch was a lesson on a completely new topic with a lab that followed.  We were then given homework that lasted for about 4 hours.  On Tuesdays we would skip the afternoon lab to have a lesson with our career coach.  On weekends, we would also have about 8 hours of homework.</p>
        <p>This was a very exhausting time of my life.  It was also a very structured time of my life.  Our career coach kept saying that it was going to be weird when we were out of the course.  We would need to keep motivated. Build a new app.  Learn a new language.  Practice a bunch of code challenges.  Master algorithms. Apply to a bunch of jobs. Go to some networking events.  Meet some people for coffee. Don't push your self too hard though.</p>
        <p>He was right.  It was weird.  That structure was gone.  I didn't know where to spend my time.  I got overwhelmed.  I couldn't figure out where to start.</p>
        <p>While I was stressing, one of my classmates showed me a slack group filled with fellow bootcampers.  Most of which were in the same boat as I was.  They all fealt like they learned a lot but were still missing that structure.</p>
        <p>It was wonderful to find others who were like me.  But we needed help.</p>
        <h3>ENTER AfterBootcamp</h3>
        <p>An app to help you with that structure.</p>
        <Footer />
      </div>
    )
  }
}

export default Intro;

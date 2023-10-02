# HTML | Video Tag

**Example**

```
<video autoplay="" loop="" muted="" poster="">
    <source src="/contentassets/e0d83a01114b46ee8111e3af132965b1/banner.mp4" type="video/mp4">
</video>
```

### What's Needed

1. `video` tag
1. `source` tag

<br><br>

### Video Tag
Overview - A open and close video tag which indicates where the video is going to be placed. Video attributes are used to control the video container and some video controls such as autoplay and poster

#### Video Element Attributes

**height** === The height of the video's display area, in CSS pixels (absolute values only; no percentages).

**autoplay** == tbd  

**poster** === Sets a static image to be loaded while the video is waiting to be loaded

<br><br>

### Source Element
Summary - Self closing tag that's needed to point to the video that you want loaded into your player

#### Source Element Attributes

**src** === Will point to the location of the video file

**type** === Indicate what type of video file it is

<br><br>

### Real World Challenge to Solve
Problem - I want a video to span the entire container's width but have a set height

The video will maintain it's original aspect ratio

*Solution*  

```
#video-bg {
  position: relative;
  width: auto;
  min-width: 100%;
  height: auto;
  background: transparent url(video-bg.jpg) no-repeat;
  background-size: cover;
}
video {
  display: block;
}
.video-container {
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -100;
}

<div class="video-container">
  <video autoplay loop muted id="video-bg">
    <source src="http://www.sram.com/contentassets/e0d83a01114b46ee8111e3af132965b1/banner.mp4" type="video/mp4" />
  </video>
</div>
```

#### What's happening?
1. You need the `<video>` element to display the video
1. The `<source>` tag inside of `<video>` does two things:
    1. Points to the source of the video
    1. Identifies the file type
1. By default the `<video>` element: 
    1. Has a `display` value of `inline`
    1. Will honor the aspect ratio of the source video
    1. Width and height in the viewport is defined by the video being embedded.
1. By 


<br>

#### Scenario 1: Default look of sample video (alone):  
   ![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_default-view.png)

   *Breakdown*
   - Video's default width and height are used since nothing is overriding it
   - Video's default aspect ratio is used since nothing is overriding it 


<br>

#### Scenario 2: Default look of sample video w/ a div next to it  
![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_default-view-w-div.png)

*Breakdown*
- Video is an inline element by default
- Since Video is an inline element the content `div` is placed right next to it (NOTE: The `div`'s display type was changed to inline)

<br>

#### Scenario 3: Video width set to 100% (alone)  
![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_width-100-percent.png)

*Breakdown*
- Video expands the entire width of the page
- Aspect ratio is kept (would have to scroll down to see the bottom of the video cause it's so big)

#### Breakdown

`<div class="video-container">` === By default has a `display` value of block


<br>

#### Questions + Comments

Q - Why set the container the video element is in as a position:fixed?
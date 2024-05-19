const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto;
    margin-right: auto;
    max-width: fit-content;">
    <p>name: Teerawat Kittivorawut</p>
    <p>id: 65130131</p>
    <div style="width:100%;">
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.6435-9/67765332_10216030414816376_5502287928665047040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFatBNtq5QsFmAw2JHHi2oK_ZcoGwyipsr9lygbDKKm8Jnnj4vofyVGxaL8LFAKOE&_nc_ohc=XWcsvGVghI8Q7kNvgGQnNK7&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYBxuf883g7vf7KT7_ewODfKovfTObC2CsWTKmGegwJOew&oe=6670FE98" style="width:300px;height:300px;" >
    </div>
    
    <a href="/myresearch">MyResearch</a>
    <a href="/researchplan">My Research Plan</a>
    <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>In the era of Industry 4.0, machine learning technology is increasingly being used in the manufacturing industry to enhance the surface inspection of workpieces for the hardening process. 
    As a basis for inspecting workpieces in the production process, this research uses deep learning image processing technology to inspect the workpiece surface for the hardening process in the production process. 
    The hardening image dataset was trained through a modified model with an accuracy of 80% to 90% of the surface segmented image of the workpiece for hardening. 
    The results of this experiment have been shown to contribute to the determination of surface inspection of workpieces for the work hardening step in the manufacturing process.
    </p>
    <a href="/">MyHome</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">เดือน</th>
      </tr>
      <tr>
        <th>ขั้นตอน</th>
        <th>ตุลาคม</th>
        <th>พฤศจิกายน</th>
        <th>ธันวาคม</th>
        <th>มกราคม</th>
        <th>กุมภาพันธ์</th>
        <th>มีนาคม</th>
        <th>เมษายน</th>
        <th>พฤษภาคม</th>
      </tr>
      <tr>
        <td>ศึกษากระบวนการและประยุกต์ใช้ Image classification โดย Deep learning </td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ศึกษาและทำความเข้าใจเกี่ยวกับกระบวนการชุบแข็งชิ้นงานและงานวิจัยที่เกี่ยวข้อง</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ออกแบบโครงสร้าง การทดลอง ส่วนของ Model Deeplearning</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Create Model Deep learning</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบ ความแม่มยำของ Model Deep learning</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ปรับแต่ง Model Deep learning </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบการทำงานหลังปรับแต่ง Model Deep learning</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <td>ประเมินผล และ สรุป</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
      </tr>
    </table>  
    <a href="/">MyHome</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "ศึกษากระบวนการและประยุกต์ใช้ Image classification โดย Deep learning",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "ศึกษาและทำความเข้าใจเกี่ยวกับกระบวนการชุบแข็งชิ้นงานและงานวิจัยที่เกี่ยวข้อง",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "ออกแบบโครงสร้าง การทดลอง ส่วนของ Model Deeplearning",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "Create Model Deep learning",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "ทดสอบ ความแม่มยำของ Model Deep learning",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "ปรับแต่ง Model Deep learning",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
    {
      id: 7,
      description: "ทดสอบการทำงานหลังปรับแต่ง Model Deep learning",
      startDate: "2024-04-01",
      endDate: "2024-04-30"
    },
    {
      id: 8,
      description: "ประเมินผล และ สรุป",
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080);

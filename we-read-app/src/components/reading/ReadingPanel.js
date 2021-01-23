import React from 'react';
import {
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import { detail, detailTest } from '../../resources/data/data'

const useStyles = makeStyles((theme) => ({
  root: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '250px',
    backgroundColor: theme.body,
    paddingTop: '30px',
    paddingBottom: '40px'
  }),
  title: (theme) => ({
    fontSize: '24px',
    marginTop: '10px',
    color: theme.text,
  }),
  paragraph: (theme) => ({
    lineHeight: 1.6,
    marginTop: '10px',
    marginBottom: '10px',
    whiteSpace: 'pre-line',
    textAlign: 'justify',
    color: theme.text
  }),
}));

const data = "Nắng chiều bao phủ bên trong hậu viện, lá cây phản chiếu ra ánh sáng nhàn nhạt, vậy mà vào lúc này, bên trong hậu viện lại vô cùng yên tĩnh, sự tĩnh lặng này dường như chỉ có thể nghe được âm thanh của lá cây khẽ xào xạt trong gió."
  + "\n\n\"Thế tử, chúng ta làm như thế có tốt không? Dù sao người và tỷ tỷ cũng đã có hôn ước rồi\" Thiếu nữ nâng gương mặt đỏ bừng của mình lên, thân thể mềm mại trắng như tuyết rúc vào trong thân thể to lớn của nam nhân: \"Nếu như chuyện này mà bị tỷ tỷ phát hiện...\""
  + "\n\n\"Nàng nói cái đồ vô dụng kia sao?\" Nam nhân cau mày kiếm lại, sau khi nghe thấy thế dung mạo tuấn tú lập tức hiện lên sự chán ghét: \"Lúc chúng ta ở chung với nhau đừng nhắc tới nữ nhân làm cho người ta chán ghét, về phần hôn ước kia đối với ta mà nói có cũng được không có cũng được, ngày nào đó ta sẽ giải trừ đạo hôn ước này, loại phế vật như nàng ta vốn không xứng trở thành thế tử của ta! Đình nhi, tin tưởng ta, ta sẽ danh chính ngôn thuận cho nàng một danh phận, chỉ có nàng mới có thể xứng với ta.\""
  + "\n\n\"Thế tử...\" Trong con ngươi của Mộ Đình Nhi có phần hơi cảm động, bất chợt bối rối nói: \"Như thế có phải bất công với tỷ tỷ quá không? Bất luận nói như thế nào thì nàng cũng là tỷ tỷ của thiếp.\""
  + "\n\nNghe nói như thế, nam nhân càng ôm chặt lấy nàng hơn, thương tiếc nói: \"Đình nhi, nàng chính là quá tốt bụng, có người muội muội như nàng là may mắn của nàng ta, nếu nàng ta không biết tốt xấu thì đừng trách ta ra tay tàn nhẫn.\""
  + "\n\nMộ Đình Nhi cúi đầu xuống chôn ở trong ngực nam nhân, khóe mắt còn mang theo vài giọt nước mắt nhưng bên môi lại vô ý nâng lên một nụ cười nhạt giống như âm mưu đã được thực hiện như ý."
  + "\n\nNhưng vào lúc này, một tiếng thét chói tai vang lên, rơi vào trong tai hai người."
  + "\n\n\"A! Các ngươi... Các ngươi...\""
  + "\n\nMộ Như Nguyệt gắt gao che miệng, không dám tin nhìn một đôi cẩu nam nữ trần như nhộng trước mặt nàng, hai hàng nước mắt giống như không có cách nào ngừng rơi được, một phút kia, dường như lòng của nàng bị thứ gì đó mạnh mẽ đâm vào."
  + "\n\nNam nhân nhướng mày, tiện tay cầm lên bộ quần áo che kín thân thể hai người, hắn nhìn về phía Mộ Như Nguyệt, vẻ mặt không che giấu đi sự chán ghét bực bội."
  + "\n\n\"Bản Thế tử đã nói từ trước, có bản Thế tử ở nơi này thì không muốn ngươi xuất hiện ở đây! Bây giờ lại dám tới quấy rầy ta và Đình nhi, nếu không phải nể tình thân phận ngươi là chi nữ của Mộ gia, bản Thế tử sẽ không để cho ngươi nhìn thấy nổi mặt trời ngày mai đâu.\""
  + "\n\nNhìn nam nhân bảo vệ Mộ Đình Nhi trong lòng, Mộ Như Nguyệt gắt gao cắn môi, ánh mắt đỏ ửng hàm chứa đầy nước mắt uất ức."
  + "\n\nLời của hắn giống như là một lưỡi dao sắc bén hung hăng ghim vào trong lòng của nàng, khiến nàng vô cùng đau đớn."
  + "\n\nThì ra trong lòng của hắn, nàng chỉ là một người vô hình mà thôi.Thế nhưng vì sao khi nàng năm tuổi, người nam nhân này lại đối xử dịu dàng với nàng như vậy ? Nếu không phải vì sự dịu dàng ấy, nàng cũng không phải hãm sâu vào, không cách nào thoát khỏi được."
  + "\n\nNhưng mà sau cuộc khảo thí thiên phú vào lúc năm tuổi kia, biết gân mạch nàng bị tắc nghẽn trở thành phế vật không thể nào tu luyện được thì tất cả sự dịu dàng ấy lại càng ngày càng xa cách nàng."
  + "\n\n\"Phong ca ca...\""
  + "\n\n\"Câm miệng!\""
  + "\n\nTiếng hét đột nhiên vang lên khiến Mộ Như Nguyệt bị dọa giật mình, nàng lại không biết bản thân vừa nói sai cái gì, tủi thân nhìn qua sắc mặt xanh mét của nam nhân kia."
  + "\n\nDạ Thiên Phong dùng ánh mắt khinh bỉ nhìn thiếu nữ mặt đầy nước mắt, nở nụ cười lạnh: \"Mộ Như Nguyệt, ngươi có điểm nào so với Đình Nhi chứ? Chỉ bằng ngươi, muốn xách giày cho Đình Nhi cũng không xứng!\""
  + "\n\n\"Thế tử...\" Mộ Đình Nhi vội vàng kéo Dạ Thiên Phong lại: \"Thế tử, đừng nói nữa, là thiếp không đúng, thiếp không nên... không nên đáp ứng Thế tử, Đình Nhi vẫn cho là tình yêu của chúng ta sẽ nhận được sự chúc phúc của tất cả mọi người nhưng thiếp đã quên, tỷ tỷ dù sao cũng rất yêu chàng, Thế tử, Đình Nhi xin chàng đừng tổn thương tỷ tỷ nữa, nàng là một cô gái tốt...\""

const ReadingPanel = (props) => {
  const classes = useStyles(props.theme);

  const customStyle = {
    fontSize: props.fontSize + 'px',
    width: props.indent,
    fontFamily: props.font,
  };
  console.log(detailTest);
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth={false}>
        <div className={classes.title}>
          Chương {props.chapterID}
        </div>
        {props.ID !== 1000 ?
          <React.Fragment>
            <div className={classes.title}>
              {"Khởi đầu"}
            </div>
            <Typography className={classes.paragraph} style={customStyle}>
              {data}
            </Typography>
          </React.Fragment>
          : <React.Fragment>
            <div className={classes.title}>
              {detailTest.titleChapter}
            </div>
            <div className={classes.paragraph} style={customStyle}
              dangerouslySetInnerHTML={{ __html: detailTest.data }} />
          </React.Fragment>

        }

      </Container>
    </React.Fragment>
  );
}

export default ReadingPanel;
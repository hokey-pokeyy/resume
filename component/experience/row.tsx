import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt, item.logoImage)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>{description}</li>
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string, logoImage?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  let startedAt;
  let startDateFormat;
  if (startedAtString.length === 7) {
    startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);
    startDateFormat = startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL);
  } else {
    startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL_DD);
    startDateFormat = startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL_DOT_DD);
  }

  const { endedAt, isWorking, endDate, startDate } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startDateFormat} ~`,
        startDate: startDateFormat,
        isWorking: true,
      };
    }

    let _endedAt;
    let endDateFormat;
    if (endedAtString.length === 7) {
      _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
      endDateFormat = _endedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL);
    } else {
      _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL_DD);
      endDateFormat = _endedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL_DOT_DD);
    }
    return {
      startDate: startDateFormat,
      endDate: `~${endDateFormat}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>
          {startDate} <br /> {endDate}
        </h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge><br/>
        <img src={logoImage} width={200} />
      </Col>
    </Row>
  );
}

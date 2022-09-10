import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  StatisticsInfoPercentage,
  StatisticsInfoLabel,
} from './Statistics.styled';
export const Statistics = ({ data }) => {
  return (
    <StatisticsContainer>
      <StatisticsTitle>Upload stats</StatisticsTitle>
      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id}>
            <StatisticsInfoLabel>{label}</StatisticsInfoLabel>
            <StatisticsInfoPercentage>{percentage}</StatisticsInfoPercentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};
Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

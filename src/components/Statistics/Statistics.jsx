import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  StatisticsInfoPercentage,
  StatisticsInfoLabel,
} from './Statistics.styled';
export const Statistics = ({ data, title }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
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
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

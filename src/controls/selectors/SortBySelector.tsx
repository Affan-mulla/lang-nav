import React from 'react';

import { SortBy, ViewType } from '../../types/PageParamTypes';
import Selector from '../components/Selector';
import SingleChoiceOptions from '../components/SingleChoiceOptions';
import { usePageParams } from '../PageParamsContext';

const SortBySelector: React.FC = () => {
  const { sortBy, updatePageParams, viewType } = usePageParams();
  if (viewType === ViewType.Table) {
    // Supported in the table columns
    return <></>;
  }

  return (
    <Selector selectorLabel="Sort by:" selectorDescription="Choose the order of items in the view.">
      <SingleChoiceOptions<SortBy>
        options={Object.values(SortBy)}
        onChange={(sortBy: SortBy) => updatePageParams({ sortBy })}
        selected={sortBy}
      />
    </Selector>
  );
};

export default SortBySelector;

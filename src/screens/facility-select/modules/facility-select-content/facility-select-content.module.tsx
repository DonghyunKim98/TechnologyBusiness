import { Box } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { FACILITY_DATA } from '../../facility-select.const';
import { FacilitySelectScreenNavigationRouteProps } from '../../facility-select.screen';

import { FacilityItem } from './components';

type FacilitySelectContentModuleProps = {};

export const FacilitySelectContentModule =
  memo<FacilitySelectContentModuleProps>(() => {
    const {
      params: { iconName, location },
    } = useRoute<FacilitySelectScreenNavigationRouteProps>();

    const data = FACILITY_DATA[location][iconName];

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <FacilityItem {...item} />}
        ListHeaderComponent={<Box style={{ height: 32 }} />}
        ItemSeparatorComponent={() => <Box style={{ height: 12 }} />}
        ListEmptyComponent={<Box style={{ height: 12 }} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });

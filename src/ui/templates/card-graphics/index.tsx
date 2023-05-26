import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { data, margin } from "./mock";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import MenuFilter from "../../shared/molecules/menu-filter";

const CardGraphics = () => {
  return (
    <Card w={483} height={336} pb={3}>
      <CardHeader display="flex" alignItems="center" gap="104">
        <Heading size="md" color="gray.900">
          Progresso das iniciativas
        </Heading>
        <MenuFilter />
      </CardHeader>
      <CardBody>
        <ResponsivePie
          data={data}
          innerRadius={0.7}
          margin={margin}
          activeInnerRadiusOffset={2}
          activeOuterRadiusOffset={2}
          theme={{ legends: { text: { fontSize: '12px' } } }}
          colors={{ datum: 'data.color' }}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsSkipAngle={1}
          legends={[
            {
              anchor: "right",
              direction: "column",
              toggleSerie: true,
              justify: false,
              translateX: 140,
              translateY: 0,
              itemWidth: 50,
              itemHeight: 32,
              itemsSpacing: 0,
              symbolSize: 20,
              symbolShape: "circle",
              itemDirection: "left-to-right",
            },
            {
              data: [
                {
                  id: "number-center",
                  label: "50",
                },
              ],
              anchor: "center",
              direction: "column",
              justify: false,
              translateX: 0,
              translateY: 0,
              itemWidth: 30,
              itemHeight: 32,
              itemsSpacing: 0,
              symbolSize: 0,
              itemDirection: "left-to-right",
            },
          ]}
        />
      </CardBody>
    </Card>
  );
};
export default CardGraphics;

import { describe, expect, test } from "@jest/globals";

import { isPlainObject } from "../src/index";

describe("isPlainObject", () => {
  test("isPlainObject ~~ normal", () => {
    expect(isPlainObject([
      {
        "code": "network-security-ops-sub",
        "title": "网络安全态势",
        "url": "http://www.uino.com"
      },
      {
        "code": "network-security-ops-sub01",
        "title": "大屏配置",
        "url": "http://www.uino.com"
      },
      {
        "code": "472",
        "title": "事件智能管理",
        "openInCurrentWindow": true,
        "url": "",
        "children": [
          {
            "code": "473",
            "title": "已关注事件台",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/events",
            "children": []
          },
          {
            "code": "474",
            "title": "自定义事件台",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/definedEvents/",
            "children": []
          },
          {
            "code": "581",
            "title": "事件概览",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/eventSurvey",
            "children": [
              {
                "code": "733",
                "title": "事件概览",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/eventSurveyNew",
                "children": []
              },
              {
                "code": "582",
                "title": "应用概览",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/eventSurvey",
                "children": []
              },
              {
                "code": "718",
                "title": "应用告警墙",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/alarmWall",
                "children": []
              },
              {
                "code": "719",
                "title": "同源分析",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/eventAnalysis",
                "children": []
              }
            ]
          },
          {
            "code": "478",
            "title": "维护期管理",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/discardEvents",
            "children": [
              {
                "code": "481",
                "title": "维护期事件",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/discardEvents/",
                "children": []
              },
              {
                "code": "677",
                "title": "维护期设置",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/Maintenance",
                "children": []
              },
              {
                "code": "790",
                "title": "维护日历",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/MaintenanceCalendar",
                "children": []
              },
              {
                "code": "795",
                "title": "维护期回收站",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/MaintenanceRecycle",
                "children": []
              }
            ]
          },
          {
            "code": "479",
            "title": "查询统计",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/queryEvent",
            "children": [
              {
                "code": "482",
                "title": "事件查询",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/queryEvent",
                "children": []
              },
              {
                "code": "580",
                "title": "事件统计",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/eventStatistics",
                "children": []
              },
              {
                "code": "682",
                "title": "监控源状态",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/sourceStatistics/",
                "children": []
              },
              {
                "code": "680",
                "title": "未丰富告警统计",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/associatStatistics/",
                "children": []
              },
              {
                "code": "781",
                "title": "值班日志",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/monitorDuty",
                "children": []
              }
            ]
          },
          {
            "code": "480",
            "title": "规则设置",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/ruleVisualizationsettings",
            "children": [
              {
                "code": "483",
                "title": "规则看板",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/visual",
                "children": []
              },
              {
                "code": "494",
                "title": "丰富规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/enrich",
                "children": []
              },
              {
                "code": "485",
                "title": "标准化规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/standardization/",
                "children": []
              },
              {
                "code": "699",
                "title": "重定级规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/weightGrading/",
                "children": []
              },
              {
                "code": "486",
                "title": "过滤规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/filter/",
                "children": []
              },
              {
                "code": "487",
                "title": "压缩规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/compressionRule/",
                "children": []
              },
              {
                "code": "488",
                "title": "通知规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/notice/",
                "children": []
              },
              {
                "code": "489",
                "title": "超时升级规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/timeOut",
                "children": []
              },
              {
                "code": "490",
                "title": "定时清理规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/timedCleanup",
                "children": []
              },
              {
                "code": "491",
                "title": "工单规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/automaticDispatch",
                "children": []
              },
              {
                "code": "679",
                "title": "派生规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/derive/",
                "children": []
              },
              {
                "code": "681",
                "title": "归集规则",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/notionalPooling/",
                "children": []
              }
            ]
          },
          {
            "code": "672",
            "title": "个性化设置",
            "openInCurrentWindow": false,
            "url": "/index.html#/tarsier/monitoring/displayInformationSettings",
            "children": [
              {
                "code": "674",
                "title": "模拟告警",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/analogAlarm",
                "children": []
              },
              {
                "code": "720",
                "title": "配置管理",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/configManage",
                "children": []
              },
              {
                "code": "675",
                "title": "配置字典",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/dictionary",
                "children": []
              },
              {
                "code": "673",
                "title": "展示信息设置",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/displayInformationSettings",
                "children": []
              },
              {
                "code": "676",
                "title": "团队管理",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/teamList",
                "children": []
              },
              {
                "code": "692",
                "title": "经验管理",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/experienceBase",
                "children": []
              },
              {
                "code": "773",
                "title": "工具箱配置",
                "openInCurrentWindow": false,
                "url": "/index.html#/tarsier/monitoring/toolBox",
                "children": []
              }
            ]
          }
        ]
      }
    ])).toBeFalsy();
  });
});

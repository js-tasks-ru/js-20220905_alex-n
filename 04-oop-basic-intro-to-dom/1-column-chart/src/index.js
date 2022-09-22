export default class ColumnChart {
  chartHeight = 50

  constructor({
    data = [],
    label = "",
    link = "",
    value = 0,
    formatHeading = data => data,
  } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = formatHeading(value);

    if (this.data.length > 0) {
      this.columnProps = this.getColumnProps(this.data);
    }
    this.element = this.render();
  }

  getDataList() {
    if (this.columnProps) {
      return this.columnProps.map(item =>
        `<div style="--value: ${item.value}" data-tooltip="${item.percent}"></div>`
      ).join('');
    };
  }

  getTemplate() {
    return `
      <div class='column-chart__title'>
        Total ${this.label}
        <a href='${this.link}' class="column-chart__link">View all</a>
      </div>
      <div class='column-chart__container'>
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.getDataList()}
        </div>
      </div>
       `;
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.classList.add('column-chart')

    if (this.columnProps) {
      wrapper.innerHTML = this.getTemplate();
    } else {
      wrapper.classList.add('column-chart_loading')
      wrapper.innerHTML = this.getTemplate();
    }

    if (!this.link) {
      wrapper.querySelector('.column-chart__link').remove();
    }
    return wrapper;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

  update(arr) {
    const chartContainer = this.element.querySelector('.column-chart__container');
    const newData = document.createElement('div');

    newData.innerHTML =
      `<div data-element="body" class="column-chart__chart">
        ${this.getDataList()}
      </div>`

    this.columnProps = this.getColumnProps(arr);

    this.element.querySelector('.column-chart__chart').remove();

    chartContainer.append(newData.firstElementChild);
  }
}

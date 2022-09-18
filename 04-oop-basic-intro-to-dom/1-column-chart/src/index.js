export default class ColumnChart {
  chartHeight = 50

  constructor (obj) {
    if (obj) {
      for (const key in obj) {
        if (key === 'data') {
          this.data = obj[key];
        } else if (key === 'label') {
          this.label = obj[key];
        } else if (key === 'value') {
          this.value = obj[key];
        } else if (key === 'link') {
          this.link = obj[key];
        } else if (key === 'formatHeading') {
          this.formatHeading = obj[key];
        }
      }
    }

    if (this.formatHeading) {
      this.value = this.formatHeading(this.value);
    }

    if (this.data && this.data.length > 0) {
      this.columnProps = this.getColumnProps(this.data);
    }

    this.element = this.render();
  }

  getDataList () {
    if (this.columnProps) {
      return this.columnProps.map(item =>
        `<div style="--value: ${item.value}" data-tooltip="${item.percent}"></div>`
      ).join('');
    }
    return;
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

    if (this.label === 'sales') {
      this.value = `$${new Intl.NumberFormat('en-EN').format(this.value)}`
    }

    if (this.label !== 'orders') {
      wrapper.innerHTML = this.getTemplate();
      wrapper.querySelector('.column-chart__link').remove();
    }

    if (!this.columnProps) {
      wrapper.classList.add('column-chart_loading')
      wrapper.innerHTML = this.getTemplate();
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
    const scale = 50 / maxValue;

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

    chartContainer.append(newData.firstElementChild)
  }
}
